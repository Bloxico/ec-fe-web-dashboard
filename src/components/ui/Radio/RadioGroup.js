// @flow
/* eslint react/sort-comp: 0 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Radio from './Radio';
import Label from '../Label/Label';

const baseClass = 'gc-radiogroup';

type RadioArray = Array<{
  value: string,
  label: string,
  hint?: any,
  disabled?: boolean,
}>;

type RadioT = {
  key: string,
  value: string,
  label?: string,
  disabled?: boolean,
  hint?: any,
  selected: any,
  children?: any,
};

type PropsT = {
  name: string,
  value: any,
  label?: string,
  hint?: any,
  selected: any,
  multiple?: RadioArray,
  tabIndex?: number,
  disabled?: boolean,
  hidden?: boolean,
  inline?: boolean,
  autoFocus?: boolean,
  children: any,
  className?: string,
  onChange?: Function,
  onBlur?: Function,
  onDragStart?: Function,
  onDrop?: Function,
  onFocus?: Function,
  onChange?: Function,
};

type StateT = {
  selected: any,
};

class RadioGroup extends PureComponent<PropsT, StateT> {
  static defaultProps = {
    selected: '',
    inline: true,
  };

  constructor(props: PropsT) {
    super(props);

    this.state = { selected: this.props.selected || '' };
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  handleChange: Function;

  handleChange = (value: any) => {
    const { onChange = f => f } = this.props;

    this.setState({ selected: value }, () => {
      onChange(value);
    });
  };

  createRadio(props: RadioT) {
    const { name } = this.props;

    const {
      key,
      value,
      label = '',
      disabled,
      hint = '',
      selected,
      children,
      onBlur,
      onDragStart,
      onDrop,
      onFocus,
    } = props;

    const checked = !!selected;

    return (
      <Label {...this.props} disabled={disabled} text={label} key={key}>
        <Radio
          name={name}
          value={value}
          selected={checked}
          onChange={this.handleChange}
          onBlur={onBlur}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onFocus={onFocus}
        />
        {children}
        {hint && <div className="gc-input__hint">{hint}</div>}
      </Label>
    );
  }

  render() {
    const { multiple, inline, children, className } = this.props;

    const classes = classNames(
      baseClass,
      inline && `${baseClass}--inline`,
      'gc-fieldset',
      className,
    );

    let Group = null;

    // multiple choices
    if (multiple) {
      const radios = multiple.map(radio => {
        const { value, label, hint = '', disabled } = radio;
        const selected = value === this.state.selected;

        return this.createRadio({
          value,
          label,
          hint,
          selected,
          disabled,
          key: `option-${Math.floor(Math.random() * 1000000)}`,
        });
      });

      Group = (
        <fieldset className={classes}>
          {radios}
          {children}
        </fieldset>
      );
    } else {
      // single radio
      const {
        value,
        label,
        selected = false,
        hint = '',
        disabled,
      } = this.props;

      Group = this.createRadio({
        value,
        label,
        hint,
        selected,
        disabled,
        children,
        key: `option-${Math.floor(Math.random() * 1000000)}`,
      });
    }

    return Group;
  }
}

export default RadioGroup;
