// @flow

import React from 'react';
import { Container as BootstrapContainer } from 'reactstrap';

type Props = {
  fluid: boolean,
};

const Container = (props: Props) => <BootstrapContainer {...props} />;

export default Container;
