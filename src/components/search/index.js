

'use strict'

import React from 'react'
import PropTypes from 'prop-types';

const Search = ({ handleSearch, isDisable }) => (
  <div className='search'>
    <input type='search'
    placeholder='Digite o nome do usuário no Github'
    disabled={isDisable}
    onKeyUp={handleSearch}
    />
  </div>
)

Search.defaultProps = {
  isDisable: false
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired
}


export default Search
