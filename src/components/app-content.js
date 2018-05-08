require('normalize.css/normalize.css');
require('styles/App.css');

'use strict'
import React, { PropTypes } from 'react'
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='content'>
    <Search handleSearch={handleSearch}/>
    {!!userInfo && <UserInfo userInfo={userInfo} /> }
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred}/> }

    {!!repos.length && <Repos
      className='repos'
      title='Repositórios: '
      repos={repos}
    /> }

    {!!starred.length && <Repos
      className='starred'
      title='Favoritos: '
      repos={starred}

    /> }

  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
