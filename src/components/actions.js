'use strict'

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos} >Repositórios</button>
    <button onClick={getStarred}>Favoritos</button>
  </div>
)

export default Actions
