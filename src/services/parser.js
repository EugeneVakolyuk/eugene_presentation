import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { SHEET_ID, SHEET_NAME } from "../components/google_parser/parser";

const options = { sheetName: SHEET_NAME.secondTable, useFormat: true };

const parser = (columns) => {
  const parser = new PublicGoogleSheetsParser(SHEET_ID, options);
  return parser
    .parse()
    .then((data) => {
      return data.map((elem) => [
        elem[columns.publisher],
        elem[columns.campaign],
        Date.parse(elem[columns.creationDate]),
        parseFloat(elem[columns.dailyBudget].slice(1)),
        parseFloat(elem[columns.imp]),
        parseFloat(elem[columns.click]),
      ]);
    })
    .catch((error) => console.log(error));
};

export { parser };
