import React from 'react';
import SearchPanel from './SearchPanel';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf('SearchPanel', module)
  .add('SearchPanel', () => (
    <SearchPanel onChange={action('keyword')} />
  ));