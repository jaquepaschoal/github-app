'use strict'


import React from 'react';
import { storiesOf } from '@storybook/react';
import Repos from './index';

storiesOf('Repos', module)
  .add('With title prop', () => (
   <Repos title='Favoritos' />
  ))
  .add('With repos', () => (
    <Repos
      title='Repositórios'
      repos={ [{
        link: 'www.google.com',
        name: 'Blog'
      }] }
    />
   ))
