import './NewStudyLog.css';
import StudyForm from './StudyForm';
import { useState } from 'react';

const NewStudyLog = (props) => {

    const [edit, setEdit] = useState(false);

    const saveForm = (savedForm) => {
        props.onSaveForm(savedForm);
    }

    const clickEditHandler = () => {
        setEdit(true);
    }

    const cancelEditHandler = () => {
        setEdit(false);
    }

    return (
        <div className='new-log'>
            {!edit && <button type='button' onClick={clickEditHandler}>Add new Study Log</button>}
            {edit && <StudyForm onSaveFormHandler = {saveForm} onCancel={cancelEditHandler}/>}
        </div>
    );
}

export default NewStudyLog;