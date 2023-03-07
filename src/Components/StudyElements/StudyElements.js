import NewStudyLog from './NewLog/NewStudyLog';
import './StudyElements.css';
import StudyChart from './StudyChartElements';

const StudyElement = () => {
    return (
        <div className='study-element'>
            <NewStudyLog />
            <StudyChart />
        </div>
    );
}

export default StudyElement;