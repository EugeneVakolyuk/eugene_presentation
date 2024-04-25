import React, { useMemo } from "react";
import { TextBox } from "./table_viewer_styled";

const Table_viewer = ({ showGrid, setShowGrid, setGrid, rootData }) => {
  const columnOptions = useMemo(() => {
    let data = [];
    rootData.columns.dateColumns.forEach((thisArg) => {
      data.push(thisArg);
    });
    return data.reduce((obj, key) => {
      obj[key] = {
        cellFormatter: function () {
          return new Date(this.value).toISOString().substring(0, 10);
        },
      };
      return obj;
    }, {});
  }, [rootData.columns.dateColumns]);

  const handleClick = () => {
    if (!showGrid) {
      setShowGrid(!showGrid);
      setGrid({
        renderTo: "main-data-grid",
        connector: {
          id: "main-data-grid-id",
        },
        type: "DataGrid",
        sync: {
          highlight: true,
        },
        dataGridOptions: {
          editable: false,
          columns: columnOptions,
        },
      });
    } else {
      setShowGrid(!showGrid);
      setGrid({});
    }
  };

  return (
    <TextBox>
      <p>
        Ваша таблиця успішно завантажена
        <span onClick={() => handleClick()}>
          {showGrid ? " сховати таблицю" : " показати таблицю"}
        </span>
      </p>
    </TextBox>
  );
};

export default Table_viewer;
