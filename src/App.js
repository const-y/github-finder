import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <h1>Hello from React</h1>
      </div>
    );
  }
}

export default App;
