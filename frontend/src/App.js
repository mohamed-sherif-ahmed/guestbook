import React from 'react';
import Login from './components/login/login.component';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MessagesFeed from './components/MessagesFeed/MessagesFeed.component';


function App() {
  return (
    <Router>
        <Route path="/" exact component={MessagesFeed}/>
        <Route path="/login/" component={Login} />
    </Router>
  );
}

export default App;
