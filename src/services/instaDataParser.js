import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { SHEET_ID, SHEET_NAME } from "../components/google_parser/parser";
import { emptyFieldPlaceholder } from "./empty_field_placeholder";

const options = { sheetName: SHEET_NAME.seventhTable, useFormat: false };
const unixTimeRegex = /Date\((\d+),(\d+),(\d+)\)/;
const regex = /^(?:\$|%).*|.*(?:\$|%)$/;

const instaDataParser = async () => {
  const parser = new PublicGoogleSheetsParser(
    "1biCvz2yYY8P6e1Dfuw-ahYX7-rFpJtlXt2dVi76SLzY",
    options
  );
  return parser.parse().then((data) => {
    const columns = {
      numberColumns: new Set(),
      dateColumns: new Set(),
      stringColumns: new Set(),
    };
    const convertedData = data.map((obj) => {
      const newObj = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          const match = unixTimeRegex.exec(value);
          //перевірка на дату
          if (match) {
            const [, year, month, day] = match;
            const dateObj = new Date(+year, +month, +day + 1);
            newObj[key] = dateObj.getTime();
            columns.dateColumns.add(key);
            //перевірка на число
          } else if (typeof obj[key] === "string" && regex.test(obj[key])) {
            const numberStr = obj[key]
              .match(/[\d.,]+/g)
              .join("")
              .replace(",", ".");
            const number = parseFloat(numberStr);
            newObj[key] = number;
            columns.numberColumns.add(key);
          } else {
            newObj[key] = value;
            typeof obj[key] === "string"
              ? columns.stringColumns.add(key)
              : columns.numberColumns.add(key);
          }
        }
      }
      return newObj;
    });

    return {
      convertedData: emptyFieldPlaceholder(convertedData, [
        ...columns.numberColumns,
        ...columns.dateColumns,
        ...columns.stringColumns,
      ]),
      columns: {
        numberColumns: [...columns.numberColumns],
        dateColumns: [...columns.dateColumns],
        stringColumns: [...columns.stringColumns],
      },
    };
  });
};
export { instaDataParser };
