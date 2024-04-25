import React, { useEffect, useState } from "react";
import Button from "../button/button";
import Select from "../select/select";
import { StyledDiv, Title, SubTitle } from "./data_filters_styled";

const Data_filters = ({ setInputData, rootData }) => {
  const [data, _] = useState(rootData);
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState("");
  const [adSets, setAdSets] = useState([]);

  useEffect(() => {
    const companies = new Set();
    data.convertedData.forEach((el) => {
      companies.add(el["Название кампании"]);
    });
    setCompanies([...companies]);
  }, [rootData]);

  useEffect(() => {
    if (company) {
      const adSet = new Set();
      data.convertedData.forEach((el) => {
        if (
          el["Название кампании"] === company &&
          el["Название группы объявлений"] !== "All"
        ) {
          adSet.add(el["Название группы объявлений"]);
        }
      });
      setAdSets([...adSet]);
    }
  }, [company]);

  const filterByCompanies = () => {
    const filteredArr = data.convertedData.filter((el) => {
      if (el["Название группы объявлений"] === "All") {
        return el;
      }
    });
    const resultedArr = filteredArr.map((el) => {
      const {
        "Название группы объявлений": _,
        "Название объявления": __,
        ...filteredData
      } = el;
      return filteredData;
    });

    setInputData((prevData) => ({
      ...prevData,
      convertedData: [...resultedArr],
    }));
  };

  const filterByAddSet = (event) => {
    setCompany(event.target.value);
    const filteredArr = data.convertedData.filter((el) => {
      if (
        el["Название кампании"] === event.target.value &&
        el["Название группы объявлений"] !== "All" &&
        el["Название объявления"] === "All"
      ) {
        return el;
      }
    });
    const resultedArr = filteredArr.map((el) => {
      const {
        "Название кампании": _,
        "Название объявления": __,
        ...filteredData
      } = el;
      return filteredData;
    });
    setInputData((prevData) => ({
      ...prevData,
      convertedData: [...resultedArr],
    }));
  };
  const filterBySet = (event) => {
    const filteredArr = data.convertedData.filter((el) => {
      if (
        el["Название кампании"] === company &&
        el["Название группы объявлений"] === event.target.value &&
        el["Название объявления"] !== "All"
      ) {
        return el;
      }
    });

    const resultedArr = filteredArr.map((el) => {
      const {
        "Название кампании": _,
        "Название группы объявлений": __,
        ...filteredData
      } = el;
      return filteredData;
    });
    setInputData((prevData) => ({
      ...prevData,
      convertedData:
        resultedArr.length > 0 ? [...resultedArr] : [...filteredArr],
    }));
  };

  return (
    <StyledDiv>
      <Title>Для більш детального аналізу відкоригуйте вхідні дані</Title>
      <SubTitle>(Підберіть бажані параметри для аналізу)</SubTitle>
      <div>
        <p>Аналіз за назвами рекламних кампаній</p>
        <Button onClick={filterByCompanies} />
      </div>
      <div>
        <p>
          Аналіз рекламної кампанії за групами оголошень. Віберіть будьласка
          потрібну кампанію
        </p>
        <Select onChange={filterByAddSet} arr={companies} />
      </div>
      {company ? (
        <div>
          <p>
            Аналіз оголошення рекламної кампанії Віберіть будьласка потрібну
            групу оголошень з компанії: <span>{company}</span>.
          </p>
          <Select isCompany={false} onChange={filterBySet} arr={adSets} />
        </div>
      ) : (
        ""
      )}
    </StyledDiv>
  );
};

export default Data_filters;
