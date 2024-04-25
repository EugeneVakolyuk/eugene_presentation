import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Dashboards from '@highcharts/dashboards';
import DataGrid from '@highcharts/dashboards/datagrid';
import LayoutModule from '@highcharts/dashboards/modules/layout';

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

export default function KpiWidget() {
    useEffect(() => {
        Dashboards.board('kpi_widget', {
            gui: {
                layouts: [{
                    id: 'layout-1',
                    rows: [{
                        cells: [{
                            id: 'dashboard-col-0'
                        }]
                    }]
                }]
            },
            components: [{
                renderTo: 'dashboard-col-0',
                type: 'KPI',
                title: 'My KPI',
                value: 10
            }]
        });
    }, []);

    return <div id="kpi_widget" />;
};