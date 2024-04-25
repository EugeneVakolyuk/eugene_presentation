export const loadedColumns = {
  publisher: "Publisher",
  campaign: "Campaign Name",
  creationDate: "Creation Date",
  dailyBudget: "Daily Budget",
  imp: "Imp",
  click: "Clicks",
};

export const rootLayOut = {
  layouts: [
    {
      rows: [
        {
          cells: [
            {
              id: "first-widget",
            },
            {
              id: "second-widget",
            },
          ],
        },
        {
          cells: [
            {
              id: "grid-widget",
            },
          ],
        },
      ],
    },
  ],
};

export const rootLayOutCampaigns = {
  layouts: [
    {
      rows: [
        {
          cells: [
            {
              id: "first-widget",
            },
            {
              id: "second-widget",
            },
          ],
        },
        {
          cells: [
            {
              id: "main-data-grid",
            },
          ],
        },
      ],
    },
  ],
};

export const rootConnectors = {
  id: "main-data-grid-id",
  type: "JSON",
  options: {
    firstRowAsNames: false,
    columnNames: [],
    data: [],
    dataModifier: {},
  },
};

export const SHEET_ID = "1biCvz2yYY8P6e1Dfuw-ahYX7-rFpJtlXt2dVi76SLzY";
export const SHEET_NAME = {
  firstTable: "Groceries",
  secondTable: "Coins",
  thirdTable: "list_3",
  fourthTable: "list_4",
  fifthTable: "list_5",
};
