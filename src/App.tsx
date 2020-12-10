import logo from './logo.svg';
import AddRecord from './Components/AddRecord';
import './App.css';
import RecordsTable from './Components/RecordsTable';
import Login from './Components/Login';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <AddRecord />
      <RecordsTable />
    </div>
  );
}

export default App;
