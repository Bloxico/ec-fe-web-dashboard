// TODO@use reselect

export const isVerifyInProgress = ({
  auth: {
    resetPassword: { inProgress },
  },
}) => inProgress;
