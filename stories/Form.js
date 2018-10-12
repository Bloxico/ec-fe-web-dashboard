// @flow

import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';

import Form, { FormField } from 'src/components/ui/Form';
import 'src/assets/styles/main.scss';
import withReduxForm from 'redux-form-storybook';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Label from '../src/components/ui/Label/Label';

const citySelectItems = [
  { value: 'SR', text: 'Serbia' },
  { value: 'BG', text: 'Bulgaria' },
  { value: 'RU', text: 'Russia' },
];
storiesOf('Form', module)
  .addDecorator(withReduxForm)
  .add('Form', () => (
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
          <Form>
            <Label text="Select multiple" disabled="true" />
            <Field
              placeholder="Select"
              multiple="true"
              type="select"
              options={citySelectItems}
              width="fixed"
              component={FormField}
              name="select"
            />
            <Label text="Select one" disabled="true" />
            <Field
              placeholder="Select"
              type="select"
              options={citySelectItems}
              width="fixed"
              component={FormField}
              name="select"
            />
            <Label text="Input default" disabled="true" />
            <Field
              size="full"
              type="text"
              placeholder="Text"
              component={FormField}
              name="text"
            />
            <Label text="Input with success" disabled="true" />
            <Field
              size="full"
              type="text"
              placeholder="Text"
              component={FormField}
              name="text"
              status="success"
            />
            <Label text="Input with error" disabled="true" />
            <Field
              size="full"
              type="text"
              placeholder="Text"
              component={FormField}
              name="text"
              status="error"
            />
            <Label text="Checkbox" disabled="true" />
            <Field type="checkbox" component={FormField} name="checkbox" />
            {/* <Field */}
            {/* size="full" */}
            {/* placeholder="Radio" */}
            {/* type="radio" */}
            {/* component={FormField} */}
            {/* name="radio" */}
            {/* /> */}

            {/* <Field */}
            {/* size="full" */}
            {/* placeholder="Switch" */}
            {/* type="switch" */}
            {/* component={FormField} */}
            {/* name="switch" */}
            {/* /> */}
            {/* <Field */}
            {/* size="full" */}
            {/* placeholder="Nickname (Optional)" */}
            {/* type="textarea" */}
            {/* component={FormField} */}
            {/* name="textarea" */}
            {/* /> */}
          </Form>
        </div>
      </div>
    </Fragment>
  ));
