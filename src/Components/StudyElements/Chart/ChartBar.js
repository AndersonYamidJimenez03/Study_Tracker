import "./ChartBar.css";

const ChartBar = (props) => {
  
  const bar_fill = (Math.round((props.studyTime / props.maxTime) * 100) || 0) + '%';

  return (
    <div className="Chart-bar__barContainer">
      <div className="Chart-bar__bar">
        <div className="Chart-bar__fill" style={{ height: bar_fill }}></div>
      </div>
      <p className="Chart-bar__label">{props.dayLabel}</p>
    </div>
  );
};

export default ChartBar;
