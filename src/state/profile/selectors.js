// TODO add reselect

export const getProfileData = ({ profile: { data } }) => data;

export const getUserProfileRegions = ({ profile: { regions } }) => regions;

export const getProfileUpdateMessage = ({ profile: { message } }) => message;

export const isUpdateProfileInProgress = ({
  profile: { updateProfileInProgress },
}) => updateProfileInProgress;

export const isFetchProfileDataInProgress = ({
  profile: { fetchProfileDataInProgress },
}) => fetchProfileDataInProgress;

export const getHasPassword = ({ profile: { hasPassword } }) => hasPassword;
