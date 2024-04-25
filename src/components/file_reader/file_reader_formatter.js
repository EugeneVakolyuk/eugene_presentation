import ExcelJS from 'exceljs';
import { emptyFieldPlaceholder } from "../../services/empty_field_placeholder.js";

export const parseXlsxData = async (fileBuffer) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(fileBuffer);
    const worksheet = workbook.getWorksheet(1);

    const columns = {
        numberColumns: [],
        dateColumns: [],
        stringColumns: []
    };
    const columnHasData = {};

    let convertedData = [];

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        const rowObject = {};
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
            let value = cell.value;
            const format = cell.numFmt;
            const header = worksheet.getRow(1).getCell(colNumber).value;

            if (rowNumber === 1) {
                columnHasData[header] = false;
                if (format) {
                    if (format.includes('yy') || format.includes('yyyy')) {
                        columns.dateColumns.push(header);
                    } else if (format.match(/0*\.?0+%?/) || format.includes('#,##0') || format.includes("₴")) {
                        columns.numberColumns.push(header);
                    } else {
                        columns.stringColumns.push(header);
                    }
                } else if (!value) {
                    return;
                } else {
                    columns.stringColumns.push(header);
                }
            } else {
                if (typeof value === 'object' && value !== null && value.result !== undefined) {
                    value = value.result;  // Використання результату формули, якщо він доступний
                    columnHasData[header] = true;
                }

                if (value !== undefined && value !== null && value !== '') {
                    columnHasData[header] = true;
                }

                if (columnHasData[header]) { // Додаємо дані тільки якщо колонка має дані
                    if (columns.numberColumns.includes(header) && typeof value === 'string') {
                        const cleanedValue = value.replace(/[^0-9.,-]/g, '').replace(',', '.');
                        rowObject[header] = cleanedValue ? parseFloat(cleanedValue) : null;
                    } else if (columns.dateColumns.includes(header)) {
                        if (value instanceof Date) {
                            rowObject[header] = value.getTime();
                        } else if (typeof value === 'string') {
                            const unixTimeRegex = /Date\((\d+),(\d+),(\d+)\)/;
                            const match = unixTimeRegex.exec(value);
                            if (match) {
                                const [, year, month, day] = match;
                                const dateObj = new Date(+year, +month - 1, +day);
                                rowObject[header] = dateObj.getTime();
                            }
                        }
                    } else {
                        rowObject[header] = value;
                    }
                }
            }
        });

        if (rowNumber > 1 && Object.keys(rowObject).length > 0) {
            convertedData.push(rowObject);
        }
    });

    const finalColumns = {
        numberColumns: columns.numberColumns.filter(header => columnHasData[header]),
        dateColumns: columns.dateColumns.filter(header => columnHasData[header]),
        stringColumns: columns.stringColumns.filter(header => columnHasData[header]),
    };

    return {
        convertedData: emptyFieldPlaceholder(convertedData, [
            ...finalColumns.numberColumns,
            ...finalColumns.dateColumns,
            ...finalColumns.stringColumns
        ]),
        columns: finalColumns
    };
};
