import { Chart } from "./components/chart/chart";
import { MainBox } from "./app_styled";
import Description from "./components/description/description";

const App = () => {
  return (
    <MainBox>
      <Description />
      <Chart />
    </MainBox>
  );
};

export { App };
