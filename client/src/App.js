import React, {Fragment} from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const App = ()=> {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Route path="/" exact component={Landing} />
        <section className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </section>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
