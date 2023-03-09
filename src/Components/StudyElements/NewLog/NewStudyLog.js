import './NewStudyLog.css';
import StudyForm from './StudyForm';

const NewStudyLog = (props) => {

    const saveForm = (savedForm) => {
        props.onSaveForm(savedForm);
    }

    return (
        <div className='new-log'>
            <StudyForm onSaveFormHandler = {saveForm}/>
        </div>
    );
}

export default NewStudyLog;