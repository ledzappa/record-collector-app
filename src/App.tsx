import { library } from '@fortawesome/fontawesome-svg-core';
import { faGamepad, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Collections from './Components/Collections';
import Header from './Components/Header';
import Login from './Components/Login';
import RecordsTable from './Components/records/RecordsTable';

library.add(faRecordVinyl, faGamepad);

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
