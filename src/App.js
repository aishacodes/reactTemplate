import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ContactPage from './Pages/Contact'
import LoginPage from './Pages/Login'
import SignupPage from './Pages/Signup'

function App() {
  return (
    <div>
        <Switch>
          <Route path="/debug" render={(props)=> <pre>{JSON.stringify(props, null, 2)}</pre>} />
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
