'use strict'


import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Search from './index';


storiesOf('Search', module)
  .add('Action component', ()=> (
    <Search handleSearch={ action('Key up') } />
  ))

