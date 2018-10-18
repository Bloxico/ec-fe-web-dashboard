// @flow

import { defineMessages } from 'react-intl';

const messages = defineMessages({
  validators_required: {
    id: 'validators_required',
    defaultMessage: 'Required',
  },
  validators_number: {
    id: 'validators_number',
    defaultMessage: 'Must be a number',
  },
  validators_alphanumeric: {
    id: 'validators_alphanumeric',
    defaultMessage: 'Only alphanumeric characters',
  },
  validators_phone: {
    id: 'validators_phone',
    defaultMessage: 'Invalid phone number, must be 10 digits',
  },
  validators_email: {
    id: 'validators_email',
    defaultMessage: 'Email is not valid',
  },
  validators_password_no_spaces: {
    id: 'validators_password_no_spaces',
    defaultMessage: 'No spaces',
  },
  validators_password_8_min: {
    id: 'validators_password_8_min',
    defaultMessage: 'Minimum 8 symbols',
  },
  validators_password_match: {
    id: 'validators_password_match',
    defaultMessage: "Passwords don't match",
  },
  validators_min: {
    id: 'validators_min',
    defaultMessage: 'Minimum allowed value is',
  },
  validators_max: {
    id: 'validators_max',
    defaultMessage: 'Maximum allowed value is',
  },
  validators_greaterthan: {
    id: 'validators_greaterthan',
    defaultMessage: 'Value must be greater than',
  },
  validators_minlen_1: {
    id: 'validators_minlen_1',
    defaultMessage: 'Must be at least',
  },
  validators_minlen_2: {
    id: 'validators_minlen_2',
    defaultMessage: 'characters or more',
  },
  validators_address: {
    id: 'validators_address',
    defaultMessage: "Invalid recipient's address format",
  },
});

type ContextT = { intl: any };

export const required = ({ intl: { formatMessage } }: ContextT) => (
  value?: string,
) => (value ? undefined : formatMessage(messages.validators_required));

export const number = ({ intl: { formatMessage } }: ContextT) => (
  value: string,
) => {
  if (value === undefined || value === null) {
    return undefined;
  }

  // eslint-disable-next-line
  return value && isNaN(value)
    ? formatMessage(messages.validators_number)
    : undefined;
};

export const alphanumeric = ({ intl: { formatMessage } }: ContextT) => (
  value: string,
) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? formatMessage(messages.validators_alphanumeric)
    : undefined;

export const phone = ({ intl: { formatMessage } }: ContextT) => (
  value: string,
) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? formatMessage(messages.validators_phone)
    : undefined;

export const email = ({ intl: { formatMessage } }: ContextT) => (
  value: string,
) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? formatMessage(messages.validators_email)
    : undefined;

export const password = ({ intl: { formatMessage } }: ContextT) => (
  value?: string,
) => {
  if (value && value.indexOf(' ') > -1) {
    return formatMessage(messages.validators_password_no_spaces);
  } else if (value && value.length < 8) {
    return formatMessage(messages.validators_password_8_min);
  }

  return undefined;
};

export const match = ({ intl: { formatMessage } }: ContextT) => (
  value: string,
  toMatch: string,
) =>
  value !== toMatch
    ? formatMessage(messages.validators_password_match)
    : undefined;

export const min = ({ intl: { formatMessage } }: ContextT) => (
  value: number,
  minVal: number,
  message?: string,
) =>
  value < minVal
    ? message || `${formatMessage(messages.validators_min)} ${minVal}`
    : undefined;

export const max = ({ intl: { formatMessage } }: ContextT) => (
  value: number,
  maxVal: number,
  message?: string,
) =>
  value && value > maxVal
    ? message || `${formatMessage(messages.validators_max)} ${maxVal}`
    : undefined;

export const minLen = ({ intl: { formatMessage } }: ContextT) => (
  value: string,
  minLen: number,
) =>
  value && value.length < minLen
    ? `${formatMessage(messages.validators_minlen_1)} ${minLen} ${formatMessage(
        messages.validators_minlen_2,
      )}`
    : undefined;

export const address = ({ intl: { formatMessage } }: ContextT) => (
  value: string,
) =>
  value && (value.length !== 34 || !value.match(/^[3G][0-9a-zA-Z]+$/))
    ? `${formatMessage(messages.validators_address)}`
    : undefined;

export const greaterThan = ({ intl: { formatMessage } }: ContextT) => (
  value: number,
  minVal: number,
  message?: string,
) =>
  parseFloat(value) <= minVal
    ? message || `${formatMessage(messages.validators_greaterthan)} ${minVal}`
    : undefined;
