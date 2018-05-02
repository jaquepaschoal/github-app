require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class AppComponent extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='search'>
          <input type='search' placeholder='Digite o nome do usuário no Github'/>
        </div>

        <div className='user-info'>
          <img src='https://avatars3.githubusercontent.com/u/28562703?v=4'/>
          <h1>
            <a href='https://github.com/jaquepaschoal'>Jaqueline Paschoal</a>
          </h1>

          <ul className='repos-info'>
            <li>Repositórios: 13 </li>
            <li>Seguidores: 0 </li>
            <li>Seguindo: 0 </li>
          </ul>

          <div className='actions'>
            <button>Repositórios</button>
            <button>Favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios:</h2>
            <ul >
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos:</h2>
            <ul >
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
