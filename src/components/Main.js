require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import AppContent from './app-content'

class AppComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        username: 'Jaqueline Paschoal',
        photo: 'https://avatars3.githubusercontent.com/u/28562703?v=4',
        login: 'jaquepaschoal',
        repos: 12,
        followers: 2,
        following: 3
      },
      repos: [{
        name: 'repo',
        link: 'ola'
      }],
      starred: []
    }
  }
  render() {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
