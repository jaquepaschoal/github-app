'use strict'


import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Actions from './index';


storiesOf('Actions', module)
  .add('Actions component', ()=> (
    <Actions
      getRepos={ action('Get Repos') } // action realiza a função
      getStarred={ action('Get Starred') }
    />
  ))

