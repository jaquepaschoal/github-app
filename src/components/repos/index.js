'use strict'

import React from 'react';
import PropTypes from 'prop-types';


const Repos = ({className,title, repos}) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul className="repos" >
      {repos.map((repo)=>(
        <li key={Math.random()}><a href={repo.link}>{repo.name}</a></li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  title: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}
export default Repos
