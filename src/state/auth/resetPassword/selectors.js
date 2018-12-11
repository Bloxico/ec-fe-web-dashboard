export const isResetPasswordInProgress = ({
  auth: {
    resetPassword: { inProgress },
  },
}) => ({ isResetPasswordInProgress: inProgress });

export const getResetPasswordEmail = ({
  auth: {
    resetPassword: { email },
  },
}) => ({ resetPasswordEmail: email });
