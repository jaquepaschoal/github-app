'use strict'

import React, { PropTypes } from 'react'

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
  title: ''
}

Repos.propType = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}
export default Repos
