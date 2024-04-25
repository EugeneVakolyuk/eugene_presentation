import { useState } from "react";
import { Forma } from "../form/form";
import { First_dashboard } from "../dashboards/first_dashboard";
import data from "../../data/json.json";

const newData = data.symbols
  .map((el) => [el.symbol, +el.filters[0].maxPrice, +el.filters[0].minPrice])
  .slice(data.symbols.length - 10);

const rootLayOut = {
  layouts: [
    {
      rows: [
        {
          cells: [
            {
              id: "title",
            },
          ],
        },
        // {
        //   cells: [
        //     {
        //       id: "google-data-grid",
        //     },
        //   ],
        // },
        {
          cells: [
            {
              id: "coins-data-grid",
            },
          ],
        },
        {
          cells: [
            {
              id: "coins-dashboard-col-0",
            },
            {
              id: "coins-dashboard-col-1",
            },
          ],
        },
        {
          cells: [
            {
              id: "dashboard-col-2",
            },
          ],
        },
        {
          cells: [
            {
              id: "dashboard-col-0",
            },
            {
              id: "dashboard-col-1",
            },
          ],
        },
      ],
    },
  ],
};

const rootConfig = {
  components: [
    {
      type: "HTML",
      renderTo: "title",
      elements: [
        {
          tagName: "h1",
          textContent: "MicroElement amount in Foods",
        },
      ],
    },
    {
      cell: "coins-data-grid",
      connector: {
        id: "coins",
      },
      type: "DataGrid",
      editable: true,
      sync: {
        highlight: true,
        visibility: true,
      },
    },
    {
      type: "Highcharts",
      renderTo: "coins-dashboard-col-0",
      connector: {
        id: "coins",
        columnAssignment: [
          {
            seriesId: "my-series",
            data: {
              name: "symbol",
              y: "minPrice",
            },
          },
        ],
      },
      chartOptions: {
        title: {
          text: "Line chart 1",
        },
        series: [
          {
            id: "my-series",
            type: "spline",
            dataLabels: {
              enabled: true,
              format: "{point.name}",
            },
          },
        ],
      },
    },
    {
      type: "Highcharts",
      renderTo: "coins-dashboard-col-1",
      connector: {
        id: "coins",
        columnAssignment: [
          {
            seriesId: "my-series",
            data: {
              name: "symbol",
              y: "maxPrice",
            },
          },
        ],
      },
      chartOptions: {
        title: {
          text: "Line chart 2",
        },
        series: [
          {
            id: "my-series",
            type: "spline",
            dataLabels: {
              enabled: true,
              format: "{point.name}",
            },
          },
        ],
      },
    },
    {
      cell: "dashboard-col-2",
      connector: {
        id: "micro-element",
      },
      type: "DataGrid",
      editable: true,
      sync: {
        highlight: true,
        visibility: true,
      },
    },
    {
      sync: {
        visibility: true,
        highlight: true,
        extremes: true,
      },
      connector: {
        id: "micro-element",
      },
      cell: "dashboard-col-0",
      type: "Highcharts",
      columnAssignment: {
        Food: "x",
        "Vitamin A": "value",
      },
      chartOptions: {
        xAxis: {
          type: "category",
          accessibility: {
            description: "Groceries",
          },
        },
        yAxis: {
          title: {
            text: "mcg",
          },
          plotLines: [
            {
              value: 900,
              zIndex: 7,
              dashStyle: "shortDash",
              label: {
                text: "RDA",
                align: "right",
                style: {
                  color: "#B73C28",
                },
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          series: {
            marker: {
              radius: 6,
            },
          },
        },
        legend: {
          enabled: true,
          verticalAlign: "top",
        },
        chart: {
          animation: false,
          type: "column",
          spacing: [30, 30, 30, 20],
        },
        title: {
          text: "First",
        },
        tooltip: {
          valueSuffix: " mcg",
          stickOnContact: true,
        },
        lang: {
          accessibility: {
            chartContainerLabel:
              "Vitamin A in food. Highcharts Interactive Chart.",
          },
        },
        accessibility: {
          description: `The chart is displaying the Vitamin A amount in
              micrograms for some groceries. There is a plotLine demonstrating
              the daily Recommended Dietary Allowance (RDA) of 900
              micrograms.`,
          point: {
            valueSuffix: " mcg",
          },
        },
      },
    },
    {
      cell: "dashboard-col-1",
      sync: {
        visibility: true,
        highlight: true,
        extremes: true,
      },
      connector: {
        id: "micro-element",
      },
      type: "Highcharts",
      columnAssignment: {
        Food: "x",
        Iron: "y",
      },
      chartOptions: {
        xAxis: {
          type: "category",
          accessibility: {
            description: "Groceries",
          },
        },
        yAxis: {
          title: {
            text: "mcg",
          },
          max: 8,
          plotLines: [
            {
              value: 8,
              dashStyle: "shortDash",
              label: {
                text: "RDA",
                align: "right",
                style: {
                  color: "#B73C28",
                },
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          series: {
            marker: {
              radius: 6,
            },
          },
        },
        title: {
          text: "Second",
        },
        legend: {
          enabled: true,
          verticalAlign: "top",
        },
        chart: {
          animation: false,
          type: "column",
          spacing: [30, 30, 30, 20],
        },
        tooltip: {
          valueSuffix: " mcg",
          stickOnContact: true,
        },
        lang: {
          accessibility: {
            chartContainerLabel: "Iron in food. Highcharts Interactive Chart.",
          },
        },
        accessibility: {
          description: `The chart is displaying the Iron amount in
              micrograms for some groceries. There is a plotLine demonstrating
              the daily Recommended Dietary Allowance (RDA) of 8
              micrograms.`,
          point: {
            valueSuffix: " mcg",
          },
        },
      },
    },
    // {
    //   cell: "google-data-grid",
    //   connector: {
    //     id: "google-sheet-connector",
    //   },
    //   type: "DataGrid",
    //   editable: true,
    //   sync: {
    //     highlight: true,
    //     visibility: true,
    //   },
    // },
  ],
};

export const Root_dashboard = () => {
  const [config, setConfig] = useState(rootConfig);

  return (
    <>
      <Forma config={config} setConfig={setConfig} />
      <First_dashboard config={config} data={newData} layout={rootLayOut} />
    </>
  );
};

// Change type of widget line chart 1 to pie
// Change "MicroElement amount in Foods" title to the "New Title"
