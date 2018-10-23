export const isVerifyInProgress = ({
  auth: {
    resetPassword: { inProgress },
  },
}) => ({ isVerifyInProgress: inProgress });
