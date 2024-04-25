import { useEffect } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);
Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

export const First_dashboard = ({ config, data, layout }) => {
  config.dataPool = {
    connectors: [
      {
        id: "micro-element",
        type: "JSON",
        options: {
          firstRowAsNames: false,
          columnNames: ["Food", "Vitamin A", "Iron"],
          data: [
            ["Beef Liver", 6421, 6.5],
            ["Lamb Liver", 2122, 6.5],
            ["Cod Liver Oil", 1350, 0.9],
            ["Mackerel", 388, 1],
            ["Tuna", 214, 0.6],
          ],
        },
      },
      {
        id: "coins",
        type: "JSON",
        options: {
          firstRowAsNames: false,
          columnNames: ["symbol", "minPrice", "maxPrice"],
          data: [...data],
        },
      },
      {
        id: "google-sheet-connector",
        type: "GoogleSheets",
        enablePolling: true,
        dataRefreshRate: 10,
        options: {
          googleAPIKey: "AIzaSyAsJcqoPw4wiuB0jd-uB_H4VuEyakP7pOw",
          googleSpreadsheetKey: "1biCvz2yYY8P6e1Dfuw-ahYX7-rFpJtlXt2dVi76SLzY",
          // googleSpreadsheetRange: "A1:H7",
          worksheet: 2,
          // startRow: 0, // Adjust if your data doesn't start from the first row
          // endRow: null, // Adjust if you want to limit the number of rows read
          // startColumn: 0, // Adjust if your data doesn't start from the first column
          // endColumn: null, // Adjust if you want to limit the number of columns read
        },
      },
    ],
  };
  config.gui = layout;

  useEffect(() => {
    Dashboards.board("container", config);
  }, [config]);

  return <div id="container" />;
};

First_dashboard.propTypes = {
  config: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  layout: PropTypes.object.isRequired,
};
