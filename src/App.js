import "./App.css";
import StudyList from "./Components/StudyLogs/StudyList";
import StudyElements from "./Components/StudyElements/StudyElements";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    subject: "Math",
    time: 3,
    date: new Date(2023, 2, 6),
    memo: "Remeber math test",
  },
  {
    id: 2,
    subject: "Language",
    time: 2,
    date: new Date(2023, 2, 9),
    memo: "Remeber Language homework",
  },
  {
    id: 3,
    subject: "Math",
    time: 1.5,
    date: new Date(2023, 2, 8),
    memo: "",
  },
  {
    id: 4,
    subject: "Physics",
    time: 5,
    date: new Date(2023, 2, 10),
    memo: "Remeber project",
  },
  {
    id: 5,
    subject: "Language",
    time: 1,
    date: new Date(2023, 2, 10),
    memo: "Remeber spanish test",
  },
  {
    id: 6,
    subject: "Language",
    time: 2,
    date: new Date(2023, 1, 10),
    memo: "Remeber study",
  },
];

const App = () => {
  const [filteredMonth, setFilteredMonth] = useState("2");
  const [logs, setLogs] = useState(DUMMY_DATA);

  const logsNum = DUMMY_DATA.length;

  const filterData = logs.filter(
    (studylog) => studylog.date.getMonth().toString() === filteredMonth
  );


  const filterChangeHandler = (changedMonth) => {
    setFilteredMonth(changedMonth);
  };

  const addStudyLogHandler = (studyLog) => {
    setLogs((prevStudyLog) => {
      return [...prevStudyLog, studyLog];
    })
  };

  return (
    <div className="App">
      <StudyElements
        list={filterData}
        onDropDownChangeHandler={filterChangeHandler}
        selectedMonth={filteredMonth}
        onAddStudyLogHandler={addStudyLogHandler}
        logs = {logsNum}
      />
      <StudyList list={filterData} />
    </div>
  );
};

export default App;
