export const isResetPasswordInProgress = ({
  auth: {
    resetPassword: { inProgress },
  },
}) => ({ isResetPasswordInProgress: inProgress });
