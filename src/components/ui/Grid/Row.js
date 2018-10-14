// @flow

import React from 'react';
import { Row as BootstrapRow } from 'reactstrap';

type Props = {
  noGutters: boolean,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: boolean,
};

const Row = (props: Props) => <BootstrapRow {...props} />;

export default Row;
