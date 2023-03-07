import "./StudyForm.css";

const StudyForm = () => {
  return (
    <form>
      <div className="study-form__controls">

        <div className="study-form__control">
          <label for="subject">Subject</label>
          <select name="subject" id="subject">
            <option value="math">Math</option>
            <option value="physics">Physics</option>
            <option value="language">Language</option>
            <option value="chemistry">Chemistry</option>
          </select>
        </div>

        <div className="study-form__control">
          <label for="time">Study Time</label>
          <input type="time" id="time" />
        </div>

        <div className="study-form__control">
          <label for="date">Date</label>
          <input type="date" id="date" />
        </div>
        
        <div className="study-form__control">
          <label for="textArea">Memo</label>
          <textarea id="textArea" />
        </div>
      </div>

      <div className="study-form__btns">
        <button className="btn btnCancel">Cancel</button>
        <button className="btn btnSubmit">Submit</button>
      </div>
    </form>
  );
};

export default StudyForm;
