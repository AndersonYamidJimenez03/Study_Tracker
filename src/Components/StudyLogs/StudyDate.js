import "./StudyDate.css";
import Card from "../UI/Card";

const StudyDate = (props) => {
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <Card className="study-date">
      <p className="study-date__month">{month}</p>
      <p className="study-date__day">{day}</p>
      <p className="study-date__year">{year}</p>
    </Card>
  );
};

export default StudyDate;
