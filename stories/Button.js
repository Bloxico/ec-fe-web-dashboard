import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/views/common/Button';
import 'src/assets/styles/main.scss';

storiesOf('Button', module)
    .add('Default', () => (
      <Fragment>
        <div style={{ width: '320px', margin: '50px auto' }}>
          <Button
            type="primary"
            width="full"
            onClick={action('clicked')}
          >Primary button
          </Button><span />
          <Button onClick={action('clicked')} width="full" type="secondary">Secondary Button</Button>
        </div>
      </Fragment>
    ));