import NewStudyLog from "./NewLog/NewStudyLog";
import "./StudyElements.css";
import StudyChartElements from "./StudyChartElements";

const StudyElement = (props) => {
  const filterChangeHandler = (changedMonth) => {
    props.onDropDownChangeHandler(changedMonth);
  };

  const saveForm = (saved) => {
    props.onAddStudyLogHandler(saved);
  };

  return (
    <div className="study-element">
      <NewStudyLog onSaveForm = {saveForm}/>
      <StudyChartElements
        list={props.list}
        onDropDownChangeHandler={filterChangeHandler}
        selectedMonth={props.selectedMonth}
      />
    </div>
  );
};

export default StudyElement;
