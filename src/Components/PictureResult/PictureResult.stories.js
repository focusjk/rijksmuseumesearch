import PictureResult from './PictureResult';
import React from 'react';
import { action } from '@storybook/addon-actions';
import data from '../data.js';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf('PictureResult', module)
  .add('PictureResult', () => (
    <PictureResult result={data} loading={false} keyword={'keyword'}/>
  ))
  .add('PictureResult Loading', () => (
    <PictureResult result={data} loading={true} keyword={'keyword'}/>
  ));
  