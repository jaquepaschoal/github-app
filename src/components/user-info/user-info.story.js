'use strict'


import React from 'react';
import { storiesOf, action } from '@storybook/react';
import UserInfo from './index';


storiesOf('User info', module)
  .add('User component', ()=> (
    <UserInfo
      userInfo={[{
        login: 'jaquepaschoal',
        username: 'jaquepaschoal',
        repos: 1,
        followers: 3,
        following: 2,
        photo: 'photo/img.png'
      }]}
    />
  ))

