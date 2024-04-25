import { useEffect, useState } from "react";

import { FcPieChart } from "react-icons/fc";
import { IconContext } from "react-icons";

import { Campaigns_with_date } from "../dashboards/campaigns_with_date";
import { WidgetCreator } from "../form/campaigns_with_date_form";
import { Commands } from "../commands/commands.jsx";
import { instaDataParser } from "../../services/instaDataParser.js";
import { CartBox, DashBox, Title } from "./chart_styled.js";

import DataLoader from "../data_loaderr/data_loader.jsx";

export const Chart = () => {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    convertedData: [],
    columns: {},
  });
  const [widgets, setWidget] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    instaDataParser().then((data) => {
      setInputData(data);
    });
  }, []);

  return (
    <CartBox>
      <Title>
        Smart Dashboard
        <IconContext.Provider value={{ className: "title-icon" }}>
          <FcPieChart />
        </IconContext.Provider>
      </Title>
      <Commands
        rootData={inputData}
        setWidget={setWidget}
        setLoading={setLoading}
        loading={loading}
        setMessage={setMessage}
      />
      <WidgetCreator
        message={message}
        setMessage={setMessage}
        setWidget={setWidget}
        loading={loading}
        setLoading={setLoading}
      />
      <DashBox>
        <DataLoader
          loading={loading}
          rootData={inputData.convertedData}
          columns={inputData.columns}
          setInputData={setInputData}
        />
        <Campaigns_with_date rootData={inputData} widget={widgets} />
      </DashBox>
    </CartBox>
  );
};
