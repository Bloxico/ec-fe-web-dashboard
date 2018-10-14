import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/ui/Button';
import 'src/assets/styles/main.scss';

storiesOf('Button', module).add('Default', () => (
  <Fragment>
    <div
      style={{
        backgroundColor: '#0c0f21',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ width: '320px', margin: '50px auto', padding: '0 10px' }}>
        <Button type="primary" width="full" onClick={action('clicked')}>
          Primary button
        </Button>
        <span />
        <Button onClick={action('clicked')} width="full" type="secondary">
          Secondary Button
        </Button>
      </div>
    </div>
  </Fragment>
));
