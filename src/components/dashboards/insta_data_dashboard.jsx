import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

const gui = {
  layouts: [
    {
      rows: [
        {
          cells: [
            {
              id: "dashboard-parser",
            },
          ],
        },
        {
          cells: [
            {
              id: "widget_1",
            },
          ],
        },
        {
          cells: [
            {
              id: "google-sheet-connector",
            },
          ],
        },
      ],
    },
  ],
};
const components = [
  {
    cell: "dashboard-parser",
    connector: {
      id: "dashboard-parser-id",
    },
    type: "DataGrid",
    editable: true,
    sync: {
      highlight: true,
      visibility: true,
    },
    dataGridOptions: {
      editable: false,
      columns: {
        Начало: {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
        "Дата начала отчетности": {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
        "Дата окончания отчетности": {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
      },
    },
  },
];
// const config = {
//   dataPool: {
//     connectors: [
//       {
//         id: "dashboard-parser-id",
//         type: "JSON",
//         options: {
//           firstRowAsNames: false,
//           data: [],
//           dataModifier: {},
//         },
//       },
//     ],
//   },
// };

export const InstaDataDashboard = ({ data, options }) => {
  useEffect(() => {
    // config.dataPool.connectors[0].options.data = data;
    Dashboards.board("container", {
      dataPool: {
        connectors: [
          {
            id: "connectors-id",
            type: "JSON",
            options: {
              firstRowAsNames: false,
              data: data,
              dataModifier: {},
            },
          },
        ],
      },
      gui: options.gui,
      components: options.components,
    });
  }, [data, options]);

  return <div id="container" />;
};
