// @flow

import React, { PureComponent } from 'react';
import ReactTable from 'react-table';
import classNames from 'classnames';
import Loader from '../Loader';

import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-table`;

type PropsT = any;

class Table extends PureComponent<PropsT> {
  static defaultProps = {
    showPagination: true,
    showPageSizeOptions: false,
    defaultPageSize: 10,
    showPageJump: false,
    previousText: '',
    nextText: '',
    loading: false,
    loadingText: <Loader />,
    noDataText: 'No rows found',
    striped: true,
  };

  render() {
    const { striped, className, loading } = this.props;

    const classes = classNames(baseClass, striped && '-striped', className);

    if (loading) {
      return <Loader />;
    }

    return <ReactTable {...this.props} className={classes} />;
  }
}

export default Table;
