import React, { useEffect, useState } from "react";
import { instaDataParser } from "../../services";
import { InstaDataDashboard } from "../dashboards/insta_data_dashboard";
import { WidgetCreator } from "../form/insta_data_form";

export const Insta_data = () => {
  const [sheetData, setSheetData] = useState([]);
  const [columnsNames, setColumnsNames] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    instaDataParser().then((data) => {
      setColumnsNames(data.columns);
      setSheetData(data.convertedData);
    });
  }, []);
  return (
    <>
      <WidgetCreator setOptions={setOptions} columnsNames={columnsNames} />
      <InstaDataDashboard data={sheetData} options={options} />
    </>
  );
};
