// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';

import Form, { FormField } from 'src/components/ui/Form';
import 'src/assets/styles/main.scss';
import withReduxForm from 'redux-form-storybook';

const citySelectItems = [
  { value: 'SR', text: 'Serbia' },
  { value: 'BG', text: 'Bulgaria' },
  { value: 'RU', text: 'Russia' },
];
storiesOf('Form', module)
  .addDecorator(withReduxForm)
  .add('Input', () => (
    <div className="panel panel--dark">
      <Form>
        <Field
          label="Empty input"
          component={FormField}
          name="input1"
          placeholder="placeholder"
        />
        <Field
          label="Disabled"
          component={FormField}
          name="input1"
          placeholder="Disabled placeholder"
          disabled
        />
      </Form>
    </div>
  ))
  .add('Select', () => (
    <div className="panel panel--dark">
      <Form>
        <Field
          placeholder="Select"
          type="select"
          options={citySelectItems}
          width="fixed"
          component={FormField}
          name="select"
        />
        <Field
          placeholder="Select"
          type="select"
          options={citySelectItems}
          width="fixed"
          component={FormField}
          name="select"
        />
      </Form>
    </div>
  ))
  .add('Checkbox', () => (
    <div className="panel panel--dark">
      <Form>
        <Field
          label="Checkbox"
          type="checkbox"
          component={FormField}
        />
          <Field
            label="Disabled"
            type="checkbox"
            disabled
            component={FormField}
          />
      </Form>
    </div>
  ));
