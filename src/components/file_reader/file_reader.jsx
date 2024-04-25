import React from "react";
import { parseXlsxData } from "./file_reader_formatter";

const File_reader = ({ loading, setFileData }) => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    // Зчитування файла з використанням exceljs
    const data = await parseXlsxData(file);
    console.log(data);
    setFileData(data);
  };

  return (
    <input
      disabled={loading}
      type="file"
      accept=".xlsx, .xls"
      onChange={handleFileUpload}
    />
  );
};

export default File_reader;
