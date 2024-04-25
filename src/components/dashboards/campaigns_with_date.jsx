import { useEffect, useState, useMemo } from "react";

import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";
import LayoutModule from "@highcharts/dashboards/modules/layout";
import MathModifier from "@highcharts/dashboards/modules/math-modifier";
import { rootLayOutCampaigns } from "../../constants";

LayoutModule(Dashboards);
MathModifier(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

export const Campaigns_with_date = ({ rootData, widget }) => {
  const grid = {
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
      columns: {
        Start: {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
        "Reporting start date": {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
        "Reporting end date": {
          cellFormatter: function () {
            return new Date(this.value).toISOString().substring(0, 10);
          },
        },
      },
    },
  };

  useEffect(() => {
    Dashboards.board("container", {
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
      editMode: {
        enabled: false,
        contextMenu: {
          enabled: true,
          items: ["editMode"],
        },
      },
      gui: widget.gui ? widget.gui : rootLayOutCampaigns,
      components: widget.components ? [...widget.components, grid] : [grid],
    });
  }, [rootData, widget, grid]);

  return <div id="container" />;
};
