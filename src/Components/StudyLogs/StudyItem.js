import "./StudyItem.css";
import StudyDate from "./StudyDate";
import Card from "../UI/Card";

const StudyItem = (props) => {
  return (
    <li>
      <Card className="study-item">
        <StudyDate date={props.date} />
        <p className="study-item__subject">{props.subject}</p>
        <p className="study-item__time">{props.time}h</p>
        <div className="study-item__memo">
          <p className="study-item__memo__title">Memo:</p>
          <p>{props.memo}</p>
        </div>
      </Card>
    </li>
  );
};

export default StudyItem;
