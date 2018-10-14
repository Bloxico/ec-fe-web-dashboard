import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/ui/Button';

storiesOf('Button', module).add('Button', () => (
  <div className="panel panel--dark">
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
));
