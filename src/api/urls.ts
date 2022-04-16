const domainUrl = 'https://tander-hack.herokuapp.com/api/v1';

export const loginUserUrl = `${domainUrl}/auth/login`;
export const logoutUserUrl = `${domainUrl}/auth/logout`;
export const registerUserUrl = `${domainUrl}/auth/registration`;
export const updateTokenUserUrl = `${domainUrl}/auth/update/token`;
export const updatePasswordUserUrl = `${domainUrl}/auth/update/password`;



//profile
export const getProfileInfo = `${domainUrl}/customer/profile`;
export const sendProfileInfo = `${domainUrl}/customer/profile/save`;

