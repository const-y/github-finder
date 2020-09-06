import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  /**
   * Search Github users
   * @param {string} text
   */
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      users: res.data.items,
    });
  };

  /**
   * Clear users from state
   */
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  /**
   * Set Alert
   */
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const { loading, users, alert } = this.state;

    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Alert alert={alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0}
            setAlert={this.setAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
