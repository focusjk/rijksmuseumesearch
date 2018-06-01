import { Button, Welcome } from '@storybook/react/demo';

import PictureItem from '../Components/PictureItem';
import PictureResult from '../Components/PictureResult';
import React from 'react';
import SearchPanel from '../Components/SearchPanel';
import { action } from '@storybook/addon-actions';
import data from './data';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('SearchPanel', module)
  .add('SearchPanel', () => (
    <SearchPanel onChange={action('keyword')} />
  ));

storiesOf('PictureResult', module)
  .add('PictureResult', () => (
    <PictureResult result={data} loading={false} keyword={'keyword'}/>
  ))
  .add('PictureResult Loading', () => (
    <PictureResult result={data} loading={true} keyword={'keyword'}/>
  ))
  .add('PctureItem', () => (
    <div style={{width : '30%'}}><PictureItem item={data[1]} /></div>
  ));

  