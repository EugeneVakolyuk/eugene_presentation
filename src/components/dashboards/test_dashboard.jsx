import { useEffect } from "react";

import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import LayoutModule from "@highcharts/dashboards/modules/layout";
import DataGrid from "@highcharts/dashboards/datagrid.js";


LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

export const TestWidgetDashboard = () => {
    useEffect(() => {
        Highcharts.chart('container_2', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
    });
    return <div id="container_2" />;
};
