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
      starred: [],
      isFetching: false
    }
  }

  getGithubApiUrl( username,type ) {
    const internalType = type? `/${type}` : '';
    const internalUser = username? `/${username}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch( e ) {
      const target = e.target;
      const keyCode = e.which || e.keyCode;
      const enter = 13;
      const value = target.value;
      if( keyCode === enter ) {
        this.setState({ isFetching: true })
        ajax().get(this.getGithubApiUrl( value ))
        .then(
          ( result ) => {
            this.setState({
              userInfo: {
                username: result.name,
                photo: result.avatar_url,
                login: result.login,
                repos: result.public_repos,
                followers: result.followers,
                following: result.following
              },
              repos: [],
              starred:[]
            })
          })

        .always(()=> this.setState({ isFetching:false }))
      }
  }

  getRepos( type ) {
    const value = this.state.userInfo.login;
    type === 'repos' ? this.setState({ starred: [] }) : this.setState({ repos: [] });
    ajax().get(this.getGithubApiUrl( value,type ))
    .then(
      ( result ) => {
        this.setState({
          [type]: result.map(( item )=>{
              return {
                link: item.html_url,
                name: item.name
              }
          })
        })
      }
    )
  }

  render() {
    return <AppContent
      {...this.state}
      // userInfo={this.state.userInfo}
      // repos={this.state.repos}
      // starred={this.state.starred}
      // isFetching={this.state.isFetching}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={() => this.getRepos('repos')}
      getStarred={() => this.getRepos('starred')}
    />
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
