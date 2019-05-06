export const setUserInfo = (user) => {
  return {
    payload: user,
    type: 'SET_USER_INFO'
  }
}