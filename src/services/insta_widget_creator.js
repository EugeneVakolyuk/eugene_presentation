import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { rootConnectors, rootLayOut } from "../constants";

const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: import.meta.env.VITE_SOME_KEY_ID,
    secretAccessKey: import.meta.env.VITE_SOME_ACCESS_KEY,
  },
});

const initConfig = {
  renderTo: "first-widget",
  type: "Highcharts",
  connector: {
    id: "connectors-id",
    columnAssignment: [
      {
        seriesId: "daily-price",
        data: [],
      },
    ],
  },
  sync: {
    highlight: true,
  },
  chartOptions: {
    chart: {
      animation: false,
      type: "",
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    series: [
      {
        id: "daily-price",
        name: "",
        dataSorting: {
          enabled: false,
        },
      },
    ],
    tooltip: {
      shared: true,
      split: true,
      stickOnContact: true,
    },
    lang: {
      accessibility: {
        chartContainerLabel: ``,
      },
    },
    accessibility: {
      description: ``,
    },
    xAxis: {
      reversed: false,
      type: "datetime",
      accessibility: {
        description: "",
      },
    },
    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    plotOptions: {
      series: {
        animation: {
          duration: 2000,
        },
        marker: {
          enabled: false,
        },
        lineWidth: 2,
      },
    },
  },
};

const insta_widget_creator = async (message, columnsNames) => {
  const prompt = `You are a Highcharts chart JSON transformer. Your task is to take a Highcharts chart JSON and modify it based on a user request. 

  The input will be provided in the following format:

  Нou can only use column names like: ${columnsNames} If the user made a request and you don’t understand which columns to use, return an empty object
  You can use types like: line, spline, area, areaspline, column, bar, pie, scatter.
  Depending on the data the user provided add title, subtitle and description for accessibility.
  You should output a modified Highcharts chart JSON object based on the user's request.
  If the request is not clear or cannot be fulfilled, you should return the original chart JSON with an error message.
  
  Some examples of user requests could be:


- "Change the chart type to line chart"
- "Update the y-axis title to 'Values'"
- "Change the chart title to 'My Chart'"
- "Remove the legend"

Please ensure that the output is a valid Highcharts chart JSON object.
Respond only with a JSON object containing the modified chart JSON and no other text.

<instructions>

Example input:
<original-json>
{
  "components": [
    {
      "renderTo": "first-widget",
      "type": "Highcharts",
      "connector": {
        "id": "connectors-id",
        "columnAssignment": [
          {
            "seriesId": "chartId",
            "data": []
          }
        ]
      },
      "sync": {
        "highlight": true
      },
      "chartOptions": {
        "chart": {
          "animation": false,
          "type": "line"
        },
        "title": {
          "text": ""
        },
        "subtitle": {
          "text": ""
        },
        "series": [
          {
            "id": "chartId",
            "name": "",
            "dataSorting": {
                "enabled": false,
              },
          }
        ],
        "tooltip": {
          "shared": true,
          "split": true,
          "stickOnContact": true
        },
        "lang": {
          "accessibility": {
            "chartContainerLabel": ""
          }
        },
        "accessibility": {
          "description": ""
        },
        "xAxis": {
          "reversed": false,
          "type": "datetime",
          "accessibility": {
            "description": ""
          }
        },
        "yAxis": [
          {
            "title": {
              "text": ""
            }
          }
        ],
        "plotOptions": {
          "series": {
            "animation": {
              "duration": 2000
            },
            "marker": {
              "enabled": false
            },
            "lineWidth": 2
          }
        }
      }
    }
  ],
 "gui": {
    "layouts": [
      {
        "rows": [
          {
            "cells": [
              {
                "id": "first-widget"
              }
            ]
          },
          {
            "cells": [
              {
                "id": "main-data-grid"
              }
            ]
          }
        ]
      }
    ]
  }
}

</original-json>
<user-request>Create chart use "Creation Date" and "Daily Budget" columns for series </user-request>

Example response:
{
  "components": [
    {
      "renderTo": "first-widget",
      "type": "Highcharts",
      "connector": {
        "id": "connectors-id",
        "columnAssignment": [
          {
            "seriesId": "daily-budget",
            "data": ["Creation Date", "Daily Budget"]
          },
        ]
      },
      "sync": {
        "highlight": true
      },
      "chartOptions": {
        "chart": {
          "animation": false,
          "type": "line"
        },
        "title": {
          "text": "Daily Budget"
        },
        "subtitle": {
          "text": "Daily budget by creation date"
        },
        "series": [
          {
            "id": "daily-budget",
            "name": "Daily Budget",
          }
        ],
        "tooltip": {
          "shared": true,
          "split": true,
          "stickOnContact": true
        },
        "lang": {
          "accessibility": {
            "chartContainerLabel": "Daily budget and clicks"
          }
        },
        "accessibility": {
          "description": "The graph shows the dependence of the daily budget and the number of clicks on the creation date."
        },
        "xAxis": {
          "type": "datetime",
          "accessibility": {
            "description": "Creation date"
          }
        },
        "yAxis": [
          {
            "title": {
              "text": "Daily Budget"
            }
          },
          {
            "title": {
              "text": "Clicks"
            },
            "opposite": true
          }
        ],
        "plotOptions": {
          "series": {
            "animation": {
              "duration": 2000
            },
            "marker": {
              "enabled": false
            },
            "lineWidth": 2
          }
        }
      }
    }
  ],
 "gui": {
    "layouts": [
      {
        "rows": [
          {
            "cells": [
              {
                "id": "first-widget"
              }
            ]
          },
          {
            "cells": [
              {
                "id": "main-data-grid"
              }
            ]
          }
        ]
      }
    ]
  }
}

</instructions>

<original-json>
{
  "components":[ ${JSON.stringify(initConfig)}],
  "gui": ${JSON.stringify(rootLayOut)},
 </original-json>
<user-request>${message}</user-request>

  `;

  const input = {
    modelId: "anthropic.claude-3-haiku-20240307-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 10000,
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
};

export { insta_widget_creator };
