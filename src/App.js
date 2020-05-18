import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <UserItem />
      </div>
    );
  }
}

export default App;
