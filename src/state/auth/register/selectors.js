export const isRegisterInProgress = ({
  auth: {
    register: { inProgress },
  },
}) => ({ isRegistrationInProgress: inProgress });

export const getRegions = ({
  auth: {
    register: { regions },
  },
}) => ({ regions });

export const getRegisterEmail = ({
  auth: {
    register: { email },
  },
}) => ({ registerEmail: email });
