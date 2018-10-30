export const isRegisterInProgress = ({
  auth: {
    register: { inProgress },
  },
}) => ({ isRegistrationInProgress: inProgress });
export const getRegions = ({
  auth: {
    register: { regions },
  },
}) => ({ registerRegions: regions });
