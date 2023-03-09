import Chart from "./Chart/Chart";
import StudyFilter from "./StudyFilter";

const StudyChartElements = (props) => {
  
  const data = [
    { dayLabel: "Sun", studyTime: 0 },
    { dayLabel: "Mon", studyTime: 0 },
    { dayLabel: "Tue", studyTime: 0 },
    { dayLabel: "Wed", studyTime: 0 },
    { dayLabel: "Thu", studyTime: 0 },
    { dayLabel: "Fri", studyTime: 0 },
    { dayLabel: "Sat", studyTime: 0 },
  ];


  props.list.forEach((studyLog) => {
    const day = studyLog.date.getDay();
    data[day].studyTime += studyLog.time;
  });

  const filterChangeHandler = (changedMonth) => {
    props.onDropDownChangeHandler(changedMonth);
  };

  return (
    <div>
      <StudyFilter
        onDropDownChangeHandler={filterChangeHandler}
        selectedMonth={props.selectedMonth}
      />
      <Chart dataChart={data} />
    </div>
  );
};

export default StudyChartElements;
