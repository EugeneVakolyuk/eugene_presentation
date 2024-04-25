import React, { useEffect, useState, useMemo } from "react";

import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";
LayoutModule(Dashboards);
Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

const Data_grid = ({ rootData }) => {
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

  useEffect(() => {
    Dashboards.board("container_id", {
      dataPool: {
        connectors: [
          {
            id: "main-data-grid-id",
            type: "JSON",
            options: {
              firstRowAsNames: false,
              columnNames: [],
              data: rootData.convertedData,
              dataModifier: {},
            },
          },
        ],
      },
      gui: {
        layouts: [
          {
            rows: [
              {
                cells: [
                  {
                    id: "main-data-grid-cell",
                  },
                ],
              },
            ],
          },
        ],
      },
      components: [
        {
          renderTo: "main-data-grid-cell",
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
        },
      ],
    });
  }, [rootData.convertedData]);

  return <div id="container_id" />;
};

export default Data_grid;
