import { useEffect, useState } from "react";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import "./index.css";
import { User_dashboard } from "../dashboards/user_dashboard";
import { Forma } from "../form/new_form";

export const SHEET_ID = "1biCvz2yYY8P6e1Dfuw-ahYX7-rFpJtlXt2dVi76SLzY";
export const SHEET_NAME = {
  firstTable: "Groceries",
  advertising: "advertising_companies",
  thirdTable: "list_3",
  fourthTable: "list_4",
  insta_data: "insta_data",
  sixthTable: "list_6",
  seventhTable: "insta_data_presntation",
};

export const Parser = () => {
  const [items, setItems] = useState("");
  const [config, setConfig] = useState({
    chart: {
      type: "bar",
    },
    title: {
      text: "Fruit Consumption",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4],
      },
      {
        name: "John",
        data: [5, 7, 3],
      },
    ],
  });

  useEffect(() => {
    const options = { sheetName: SHEET_NAME.secondTable };
    const parser = new PublicGoogleSheetsParser(SHEET_ID, options);
    parser.parse().then((data) => {
      console.log(data);
      setItems(JSON.stringify(data));
    });
  }, []);

  return (
    <>
      <Forma items={items} setConfig={setConfig} />
      <User_dashboard config={config} />
    </>
  );
};

// ці команди при поточному промпті працюють:
// Create pie char, use all products and May
// Create two charts. First bar type second line type
// Try to filter a table, use only products and values in may and create a line chart
// Try to filter a table, use only products and values spring month and create a column chart
// Try to filter a table, use only vegetables and values spring month and create a line chart
// Try to filter a table, and sum values for all months for each product in the column: "Total", use only products values and values "Total" to creating a line chart
// Try to filter a table and sum values for all months for "milk" and "potato" in the column: "Total", use only values "milk" and "potato" and values "Total" to create a line chart

// Sum up the “Daily Budget” for each “Publisher”, create a DataGrid and Line Chart
//! Create chart use only "Campaign Name" and  "Daily Budget" --- помилка значення не може бути строкою
// TODO працює при коректних вхідних даних (Paused)
//? Convert “Daily budget” value to the number, if this is not possible, do not use this value. Create a DataGrid and line chart use only the converted values of “Daily budget” and "Campaign Name".
//? Convert “Daily budget” value to the number, if this is not possible, do not use this value. From this values and "Campaign Name" create a chart.
//TODO Convert “Daily budget” value to the number, if this is not possible, do not use this value. If the value is "Unlimited", set it to 10000. Create a DataGrid and line chart use only the converted values of “Daily budget” and "Campaign Name".
// Convert “Daily budget” value to the number, if this is not possible, do not use this value. Create a DataGrid and chart using "Campaign Status" equals to "Deleted" and "Failed" and "Daily Budget".

// Return the most expensive budget. Create chart use only "Daily Budget" and "Campaign Status". Value of "Daily Budget" convert to number.

// Calculate the amount of "Daily Budget" according to the "Publisher". Group to the table. Create line chart from this table

// const rootConfig = {
//   dataPool: {
//     connectors: [
//       {
//         id: "data",
//         type: "JSON",
//         options: {
//           firstRowAsNames: false,
//           columnNames: ["Name", "Value"],
//           data: [
//             ["Bob", 120],
//             ["Anna", 150],
//             ["Vasiko", 140],
//           ],
//         },
//       },
//     ],
//   },
//   gui: {
//     layouts: [
//       {
//         rows: [
//           {
//             cells: [
//               {
//                 id: "dashboard-col-0",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   components: [
//     {
//       sync: {
//         visibility: true,
//         highlight: true,
//         extremes: true,
//       },
//       connector: {
//         id: "data",
//       },
//       cell: "dashboard-col-0",
//       type: "Highcharts",
//       columnAssignment: {
//         Name: "x",
//         Value: "value",
//       },
//       chartOptions: {
//         xAxis: {
//           type: "category",
//           accessibility: {
//             description: "Groceries",
//           },
//         },
//         yAxis: {
//           title: {
//             text: "mcg",
//           },
//           plotLines: [
//             {
//               value: 900,
//               zIndex: 7,
//               dashStyle: "shortDash",
//               label: {
//                 text: "RDA",
//                 align: "right",
//                 style: {
//                   color: "#B73C28",
//                 },
//               },
//             },
//           ],
//         },
//         credits: {
//           enabled: false,
//         },
//         plotOptions: {
//           series: {
//             marker: {
//               radius: 6,
//             },
//           },
//         },
//         legend: {
//           enabled: true,
//           verticalAlign: "top",
//         },
//         chart: {
//           animation: false,
//           type: "column",
//           spacing: [30, 30, 30, 20],
//         },
//         title: {
//           text: "",
//         },
//         tooltip: {
//           valueSuffix: " mcg",
//           stickOnContact: true,
//         },
//       },
//     },
//   ],
// };
