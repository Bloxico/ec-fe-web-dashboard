export const isLoginInProgress = ({
  auth: {
    login: { inProgress },
  },
}) => ({ isLoginInProgress: inProgress });
