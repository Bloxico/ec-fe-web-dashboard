// TODO add reselect

export const getProfileData = ({ profile: { data } }) => data;

export const getUserProfileRegions = ({ profile: { regions } }) => regions;

export const isUpdatePrileInProgress = ({ profile: { updateProfileInProgress } }) => updateProfileInProgress;

export const isFetchProfileDataInProgress = ({ profile: { fetchProfileDataInProgress } }) => fetchProfileDataInProgress;