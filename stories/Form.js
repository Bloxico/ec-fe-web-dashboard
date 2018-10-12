// @flow

import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';

import Form, { FormField } from 'src/components/ui/Form';
import Button from '@partials/Button';
import 'src/assets/styles/main.scss';
import withReduxForm from 'redux-form-storybook';

storiesOf('Form', module)
    .addDecorator(withReduxForm)
    .add('Form', () => (
            <Fragment>
                <div style={{ backgroundColor: '#0c0f21', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <div style={{ width: '320px', margin: '50px auto', padding: '0 10px' }}>
                        <h1>Create an account</h1>
                        <Form>
                            {/* TODO@martins add validatiors */}
                            <Field placeholder="Email" type="email" size="full" component={FormField} name="username" width="auto" />
                            <Field
                              size="full"
                              type="password"
                              placeholder="Password"
                              component={FormField}
                              name="password"
                              width="auto"
                            />
                            <Field
                              size="full"
                              placeholder="Repeat Password"
                              type="password"
                              component={FormField}
                              name="repeatPassword"
                              width="auto"
                            />
                            <Field
                              size="full"
                              placeholder="Region"
                              type="text"
                              component={FormField}
                              name="region"
                              width="auto"
                            />
                            <Field
                              size="full"
                              placeholder="City"
                              type="text"
                              component={FormField}
                              name="city"
                              width="auto"
                            />
                            <Field
                              size="full"
                              placeholder="Nickname (Optional)"
                              type="text"
                              component={FormField}
                              name="nickname"
                              width="auto"
                            />
                            <Button type="primary" size="full">Continue</Button>
                        </Form>
                    </div>
                </div>
            </Fragment>
        )
    );
