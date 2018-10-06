import React, { Fragment} from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/views/common/Button';

storiesOf('Button', module)
.add('Default', () => (
  <Fragment>
    <Button onClick={action('clicked')}>Default Button</Button>
    <Button onClick={action('clicked')} type="primary">Primary Button</Button>
  </Fragment>
));