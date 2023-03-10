import "./StudyForm.css";
import { useState } from "react";

const StudyForm = (props) => {
  const [userInput, setUserInput] = useState({
    selectedSubject: "",
    enteredTime: "",
    enteredDate: "",
    enteredTextArea: "",
  });

  const subjectSelected = (e) => {
    setUserInput((preState) => {
      return { ...preState, selectedSubject: e.target.value };
    });
  };

  const enteredStudyTime = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTime: +(e.target.value) };
    });
  };

  const enteredDate = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const enteredTextArea = (e) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTextArea: e.target.value}
    })
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const dateText = userInput.enteredDate.replaceAll('-', '/');

    const newItemForm = {
      subject: userInput.selectedSubject,
      time: userInput.enteredTime,
      date: new Date(dateText),
      memo: userInput.enteredTextArea
    };

    props.onSaveFormHandler(newItemForm);

    setUserInput({
      selectedSubject: "",
      enteredTime: "",
      enteredDate: "",
      enteredTextArea: "",
    })
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className="study-form__controls">
        <div className="study-form__control">
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            onChange={subjectSelected}
            value={userInput.selectedSubject}
          >
            {
              <option value="" disabled hidden>
                Choose one
              </option>
            }
            <option value="math">Math</option>
            <option value="physics">Physics</option>
            <option value="language">Language</option>
            <option value="chemistry">Chemistry</option>
          </select>
        </div>

        <div className="study-form__control">
          <label htmlFor="time">Study Time</label>
          <input
            type="number"
            id="time"
            min='0.5'
            max='24'
            step='0.5'
            onChange={enteredStudyTime}
            value={userInput.enteredTime}
          />
        </div>

        <div className="study-form__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={enteredDate}
            value={userInput.enteredDate}
          />
        </div>

        <div className="study-form__control">
          <label htmlFor="textArea">Memo</label>
          <textarea
            id="textArea"
            onChange={enteredTextArea}
            value={userInput.enteredTextArea}
          />
        </div>
      </div>

      <div className="study-form__btns">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default StudyForm;
