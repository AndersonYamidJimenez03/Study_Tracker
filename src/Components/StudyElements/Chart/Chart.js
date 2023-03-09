import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

  const dataTimes = props.dataChart.map(item => item.studyTime);
  const maxTime = Math.max(...dataTimes);

  return (
    <div className="chart">
      {props.dataChart.map((chartItem) => (
        <ChartBar
          key={chartItem.dayLabel}
          dayLabel={chartItem.dayLabel}
          studyTime={chartItem.studyTime}
          maxTime={maxTime}
        />
      ))}
    </div>
  );
};

export default Chart;
