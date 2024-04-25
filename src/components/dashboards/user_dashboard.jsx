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

export const User_dashboard = ({ config }) => {
  useEffect(() => {
    Dashboards.board("container", config);
  }, [config]);

  return (
    <>
      <div id="container" />
    </>
  );
};

User_dashboard.propTypes = {
  config: PropTypes.object.isRequired,
};
