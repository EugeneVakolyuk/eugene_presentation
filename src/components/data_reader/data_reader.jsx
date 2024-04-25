import React, { useState } from "react";
import PropTypes from "prop-types";
import { instaDataParser } from "../../services";
import { ErrorMessage, Forma, SubTitle, Title } from "./data_reader_styled";

const Data_reader = ({ setInputData, setLoading, setShowGrid, setWidget }) => {
  const [tableId, setTableId] = useState("");
  const [sheetName, setSheetName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowGrid(false);
    setWidget({});
    const data = await instaDataParser(tableId, sheetName);
    if (data.convertedData.length === 0) {
      setError(true);
    } else {
      setInputData(data);
      setError(false);
    }
    setTableId("");
    setSheetName("");
    setLoading(false);
  };
  return (
    <>
      <Title>
        Щоб завантажити таблицю з Google вкажіть id таблиці та назву листа
      </Title>
      <SubTitle>
        (Приклад id таблиці: 1biCvz2yYY8P6e1Dfuw-ahYX7-rFpJtlXt2dVi76SLzY, назва
        листа: insta_data)
      </SubTitle>

      <Forma onSubmit={handleSubmit}>
        <input
          required
          placeholder="Table ID"
          type="text"
          name="table_id"
          value={tableId}
          onChange={(e) => setTableId(e.target.value.trim())}
        />
        <input
          placeholder="Sheet name"
          type="text"
          name="sheet_name"
          value={sheetName}
          onChange={(e) => setSheetName(e.target.value.trim())}
        />
        <button type="submit">Submit</button>
      </Forma>
      {error ? (
        <ErrorMessage>
          Не вдалося завантажити файл, перевірте введені дані та повторіть
          спробу.
        </ErrorMessage>
      ) : (
        ""
      )}
    </>
  );
};

export default Data_reader;

Data_reader.propTypes = {
  setInputData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
