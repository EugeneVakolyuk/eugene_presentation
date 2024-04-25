import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

export async function bedrock(message, config) {
  const prompt = `
Human: You are Highcharts Dashboard library transformer. Your task is to take a Highcharts Dashboard config JSON and modify it beside user request. When modifying an object, do not change fields that were not specified in the user request. The input it will be provided in the following format:

Input example:
You should output a modified Highcharts Dashboard config JSON based on the user request. If the request is not clear or can not be fulfilled, you should return the original Highcharts Dashboard config JSON.

Some examples of user request can be:
   - "Change type of widget cell : "dashboard-col-0" to "bar" ",

Respond only with Highcharts Dashboard JSON object end do no add any other text.
Please ensure that output is valid Highcharts charts JSON object.

Input example:
<origin_json>
{
  components: [
    {
      type: "HTML",
      renderTo: "title",
      html: '<h1 id="main-title">Your text</h1>',
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
          description: 'The chart is displaying the Vitamin A amount in
              micrograms for some groceries. There is a plotLine demonstrating
              the daily Recommended Dietary Allowance (RDA) of 900
              micrograms.',
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
          description: 'The chart is displaying the Iron amount in
              micrograms for some groceries. There is a plotLine demonstrating
              the daily Recommended Dietary Allowance (RDA) of 8
              micrograms.',
          point: {
            valueSuffix: " mcg",
          },
        },
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
  ],
}
</origin_json>
 <user_req>Change type of components cell : "dashboard-col-0" to "bar"</user_req>


  Response example:
  {
   components: [
    {
      type: "HTML",
      renderTo: "title",
      html: '<h1 id="main-title">Your text</h1>',
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
          type: "bar",
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
          description: 'The chart is displaying the Vitamin A amount in
              micrograms for some groceries. There is a plotLine demonstrating
              the daily Recommended Dietary Allowance (RDA) of 900
              micrograms.',
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
          description: 'The chart is displaying the Iron amount in
              micrograms for some groceries. There is a plotLine demonstrating
              the daily Recommended Dietary Allowance (RDA) of 8
              micrograms.',
          point: {
            valueSuffix: " mcg",
          },
        },
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
  ],
}     



    <origin_json>
   ${config}
    </origin_json>
    <user_req>
    ${message}
    </user_req>
    `;

  const input = {
    modelId: "anthropic.claude-3-haiku-20240307-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    }),
  };

  const command = new InvokeModelCommand(input);

  try {
    const { body } = await client.send(command);
    const completions = JSON.parse(new TextDecoder().decode(body));
    return completions.content[0].text;
  } catch (error) {
    console.error(error);
  }
}
