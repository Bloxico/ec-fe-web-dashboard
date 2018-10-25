export const isResetPasswordInProgress = ({
  auth: {
    resetPassword: { inProgress },
  },
}) => ({ isResetPasswordInProgress: inProgress });
export const isResetPasswordEmail = ({
  auth: {
    resetPassword: { email },
  },
}) => ({ isResetPasswordEmail: email });
