/* eslint-disable react/require-default-props, react/no-find-dom-node */

// TODO@martins check value in fom for ionput type password
import React, { PureComponent } from 'react';

import classNames from 'classnames';

import Label from '..//Label';
import Input from '../Input';
// import Search from '..//Search';
import Textarea from '..//Textarea';
import Select from '../Select';
import Radio, { RadioGroup } from '..//Radio';
import Checkbox from '..//Checkbox';
import Switch from '../Switch';
import InputGroup from './InputGroup';

type FieldStatus = 'success' | 'warning' | 'error' | null;

type FieldSizes = 'small' | 'large';

type FieldWidths = 'auto' | 'wide' | 'full';

const inputTypes = {
  text: Input,
  // output: Output,
  password: Input,
  // search: Search,
  number: Input,
  email: Input,
  select: Select,
  radio: Radio,
  checkbox: Checkbox,
  switch: Switch,
  textarea: Textarea,
};

export type InputTypesT = $Keys<typeof inputTypes>;

type InputT = {
  name: string,
  value: any,
  onFocus?: Function,
  onBlur?: Function,
  onChange?: Function,
  onDragStart?: Function,
  onDrop?: Function,
};

type MetaT = {
  form: string,
  error?: string,
  warning?: string,
  active: boolean,
  autofilled: boolean,
  asyncValidating: boolean,
  dirty: boolean,
  initial: any,
  invalid: boolean,
  pristine: boolean,
  submitting: boolean,
  submitFailed: boolean,
  touched: boolean,
  valid: boolean,
  visited: boolean,
  dispatch: Function,
};

type PropsT = {
  input?: InputT,
  meta?: MetaT,
  type?: $Keys<typeof inputTypes>,
  id?: string,
  name?: string,
  disabled?: boolean,
  hint?: any,
  help?: any,
  prefix?: any,
  sufix?: any,
  label?: string,
  status?: FieldStatus,
  message?: string,
  format?: string,
  inline?: boolean,
  options?: Object | Array<{ value: string, text: string }>,
  multiple?: boolean | Array<{ value: string, label: string }>,
  selected?: any,
  toggle?: boolean,
  ref?: Function,
  size?: FieldSizes,
  width?: FieldWidths,
  className?: string,
};

const baseClass = 'enrg-form-group';

const omit = (obj: Object, keys: Array) =>
  Object.entries(obj)
    .filter(([key]) => !keys.includes(key))
    .reduce((newObj, [key, val]) => Object.assign(newObj, { [key]: val }), {});

class FormField extends PureComponent<PropsT> {
  render() {
    const {
      input,
      meta,
      type = 'text',
      id,
      disabled,
      hint,
      help,
      label,
      message,
      inline,
      multiple,
      selected,
      size,
      width,
      prefix,
      sufix,
      className,
    } = this.props;

    const isTogglable = type === 'checkbox' || type === 'switch';

    const isRadio = type === 'radio';

    const hasAddon = this.props.sufix;

    const isOutput = type === 'output';

    const InputField = inputTypes[type];

    const error =
      meta && !meta.active && meta.touched && meta.error ? meta.error : message;

    const status = error ? 'error' : this.props.status;

    const inputProps = omit(
      {
        ...this.props,
        ...input,
        status,
      },
      ['input', 'prefix', 'sufix', 'hint', 'help', 'message', 'inline'],
    );

    const classes = classNames(
      baseClass,
      status && `${baseClass}--${status}`,
      size && `${baseClass}--${size}`,
      width && `${baseClass}--${width}`,
      prefix && `${baseClass}--prefix`,
      inline && `${baseClass}--inline`,
      type === 'checkbox' && `${baseClass}--checkbox`,
      type === 'switch' && `${baseClass}--switch`,
      isRadio && `${baseClass}--radio`,
      hasAddon && `${baseClass}--sufix`,
      className,
    );

    return (
      <div className={classes}>
        {!isTogglable &&
          !isRadio &&
          !isOutput && (
            <Label {...this.props} id={id} text={label} disabled={disabled}>
              <InputGroup
                size={size}
                prefix={prefix}
                input={<InputField {...inputProps} />}
                sufix={sufix}
                hint={hint}
                help={help}
                error={error}
              />
            </Label>
          )}

        {isTogglable &&
          !isRadio && (
            <Label {...this.props} id={id} text={label} disabled={disabled}>
              <InputField {...inputProps} />
              {hint && <div className="enrg-input__hint">{hint}</div>}
              {error && <div className="enrg-input__message">{error}</div>}
            </Label>
          )}

        {!isTogglable &&
          isRadio && (
            <RadioGroup
              {...inputProps}
              multiple={multiple}
              selected={selected}
              disabled={disabled}
              inline={inline}
            >
              {hint && <div className="enrg-input__hint">{hint}</div>}
              {error && <div className="enrg-input__message">{error}</div>}
            </RadioGroup>
          )}
      </div>
    );
  }
}

export default FormField;
