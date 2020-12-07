import logo from './logo.svg';
import AddRecord from './Components/AddRecord'
import './App.css';
import RecordsTable from './Components/RecordsTable';

function App() {
  return (
    <div className="App">
      <AddRecord />
      <RecordsTable />
    </div>
  );
}

export default App;
