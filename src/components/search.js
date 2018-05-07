'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
  <div className='search'>
    <input type='search'
    placeholder='Digite o nome do usuário no Github'
    onKeyUp={(e)=>{
      const keyCode = e.which || e.keyCode;
      const enter = 13;
      const value = e.target.value;
      if( keyCode === enter ) {
        ajax().get(`https://api.github.com/users/${value}`)
        .then((result)=>console.log(result))
      }
    }}
    />
  </div>
)

export default Search
