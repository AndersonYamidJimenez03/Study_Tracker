import './App.css';
import StudyList from './Components/StudyLogs/StudyList';
import StudyElements from './Components/StudyElements/StudyElements';


const DUMMY_DATA = [
  {
    id: 1,
    subject: 'Math',
    time: 3, 
    date: new Date(2023, 2, 6),
    memo: 'Remeber math test'
  }, 
  {
    id: 2,
    subject: 'Language',
    time: 2, 
    date: new Date(2023, 2, 9),
    memo: 'Remeber Language homework'
  }, 
  {
    id: 3,
    subject: 'Math',
    time: 1.5, 
    date: new Date(2023, 2, 8),
    memo: ''
  }, 
  {
    id: 4,
    subject: 'Physics',
    time: 5, 
    date: new Date(2023, 2, 10),
    memo: 'Remeber project'
  },
  {
    id: 5,
    subject: 'Language',
    time: 1, 
    date: new Date(2023, 2, 10),
    memo: 'Remeber spanish test'
  }
];




const App = () => {

  return (
    <div className="App">
      <StudyElements />
      <StudyList list={DUMMY_DATA}/>
    </div>
  );
}

export default App;
