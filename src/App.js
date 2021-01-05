import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route}
 from "react-router-dom";
import Mail from './components/Mail'
import EmailList from './components/EmailList'

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>

        <div className='app__body'>
          <Sidebar />

          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
