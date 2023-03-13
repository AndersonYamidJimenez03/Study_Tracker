import "./Chart.css";
import ChartBar from "./ChartBar";
import Card from '../../UI/Card';

const Chart = (props) => {

  const dataTimes = props.dataChart.map(item => item.studyTime);
  const maxTime = Math.max(...dataTimes);

  return (
    <Card className="chart">
      {props.dataChart.map((chartItem) => (
        <ChartBar
          key={chartItem.dayLabel}
          dayLabel={chartItem.dayLabel}
          studyTime={chartItem.studyTime}
          maxTime={maxTime}
        />
      ))}
    </Card>
  );
};

export default Chart;
