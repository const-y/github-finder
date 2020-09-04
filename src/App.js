import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      loading: false,
      users: res.data,
    });
  }

  render() {
    const { loading, users } = this.state;

    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
