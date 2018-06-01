import PictureItem from './PictureItem';
import React from 'react';
import { action } from '@storybook/addon-actions';
import data from '../data.js';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf('PictureItem', module)
  .add('PictureItem', () => (
    <div style={{width : '30%'}}><PictureItem {...data[1]} /></div>
  ));
