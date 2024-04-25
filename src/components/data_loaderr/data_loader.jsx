import React from "react";
import * as XLSX from "xlsx";
import Button from "../button/button";
import { DisabledInput, FaceInput, MainBox } from "./data_loader_styled";

import { TbArrowBarToDown } from "react-icons/tb";

const DataLoader = ({ rootData, columns, setInputData, loading }) => {
  const handleExport = () => {
    // Создание рабочей книги и листа
    const worksheet = XLSX.utils.json_to_sheet(rootData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    // Определите имя файла
    const fileName = "smart_dashboard_example.xlsx";

    // Скачивание файла
    XLSX.writeFile(workbook, fileName);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        // Пример обработки первого листа файла
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const columnsName = [
          ...columns.numberColumns,
          ...columns.dateColumns,
          ...columns.stringColumns,
        ];

        for (const key in jsonData[0]) {
          if (!columnsName.includes(key)) {
            alert("File isn't valid");
            return;
          }
        }
        setInputData((prevData) => ({
          ...prevData,
          convertedData: jsonData,
        }));
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Please select an Excel file to download.");
    }
  };
  return (
    <MainBox>
      <Button disabled={loading} onClick={handleExport} children={"Export Table"} />
      <FaceInput>
        Import Table
        <TbArrowBarToDown />
        <DisabledInput
          disabled={loading}
          type="file"
          accept=".xlsx, .xls"
          onChange={handleImport}
        />
      </FaceInput>
    </MainBox>
  );
};

export default DataLoader;
