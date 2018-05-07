require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import AppContent from './app-content'
import ajax from '@fdaciuk/ajax'

class AppComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch(e) {
      const keyCode = e.which || e.keyCode;
      const enter = 13;
      const value = e.target.value;
      if( keyCode === enter ) {
        ajax().get(`https://api.github.com/users/${value}`)
        .then(
          (result) => {
            this.setState({
              userInfo: {
                username: result.name,
                photo: result.avatar_url,
                login: result.login,
                repos: result.public_repos,
                followers: result.followers,
                following: result.following
              }
            })
          }
        )
      }
  }

  render() {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
