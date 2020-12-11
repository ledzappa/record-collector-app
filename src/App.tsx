import logo from './logo.svg';
import AddRecord from './Components/records/AddRecord';
import './App.css';
import RecordsTable from './Components/records/RecordsTable';
import Login from './Components/Login';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Collections from './Components/Collections';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/records">
            <RecordsTable />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
      <Header />
      {/* <AddRecord /> */}
      {/* <RecordsTable /> */}
    </div>
  );
}

export default App;
