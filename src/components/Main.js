require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          className='repos'
          title='Repositórios: '
          repos ={[{
            name: 'Nome repositório',
            link: '#'
          }]}
        />

        <Repos
          className='starred'
          title='Favoritos: '
          repos ={[{
            name: 'Nome repositório',
            link: '#'
          }]}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
