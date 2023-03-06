import "./StudyList.css";
import StudyItem from "./StudyItem";

const StudyList = (props) => {
  return (
    <ul className="study-list">
      {props.list.map((item) => (
        <StudyItem 
        key={item.id}
        subject={item.subject}
        time={item.time}
        date={item.date}
        memo={item.memo} 
        />
      ))}
    </ul>
  );
};

export default StudyList;
