import React from 'react';
import Login from './components/login/login.component';
import 'antd/dist/antd.css';
import MessagesFeed from './components/MessagesFeed/MessagesFeed.component';


function App() {
  return (
    <React.Fragment>
      <Login />
      <MessagesFeed />
    </React.Fragment>
  );
}

export default App;
