import { FaChartLine } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import {
  DesBox,
  StyledSpanFirst,
  StyledSpanSecond,
} from "./description_styled";

const arr = [
  "Cost per result, compare how the cost per click has changed.",
  "Analyze CPC and CPM indicators to determine the most and least cost-effective campaigns.",
  "Coverage and engagement analysis using campaign metrics.",
];

const Description = () => {
  return (
    <DesBox>
      <h2>
        Create <StyledSpanFirst>useful</StyledSpanFirst> and
        <StyledSpanSecond> informative</StyledSpanSecond> charts with simple
        prompts.
      </h2>
      <p>
        This approach aids in data visualization, allowing analysts to quickly
        comprehend the data and enabling users to save time when creating
        charts.
      </p>
      <br />
      <p>
        Smart Dashboards are designed to simplify charting for users. There's no
        need to be a programmer just enter a prompt and obtain the result.
      </p>
      <br />
      <p>
        This example makes it possible to analyze real statistics of advertising
        companies of an Instagram user. Use simple prompts to create attractive
        and informative diagrams. Indicate in your request the parameters you
        are interested in to receive an analysis of the advertising campaign.
      </p>
      <br />
      <p>Analyze campaign performance:</p>
        <ul>
            <li>
                <FaChartLine />
                <p>Cost per result, compare how the cost per click has changed.</p>
            </li>
            <li>
                <FaChartBar />
                <p>
                    Analyze CPC and CPM indicators to determine the most and least
                    cost-effective campaigns.
                </p>
            </li>
            <li>
                <FaChartArea />
                <p>Coverage and engagement analysis using campaign metrics.</p>
            </li>
        </ul>
      <br />
      <p>
        Use the ability to upload and download a table to change the values ​​of
        indicators. Do not change the original table structure and cell formats.
      </p>
      <br />
      <p>
        Diagram generation uses AI, make sure the instructions in the prompt are
        clear to it. Data may not be accurate.
      </p>
    </DesBox>
  );
};

export default Description;
