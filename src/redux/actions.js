//////

export const setRegisterStatus = (status) => ({
    type: "SET_REGISTER_STATUS",
    payload: status,
  });

export const setLoginStatus = (status) => ({
    type: "SET_LOGIN_STATUS",
    payload: status,
})

export const showNotification = () => ({
  type: "SHOW_NOTIFICATION",
});

export const hideNotification = () => ({
  type: "HIDE_NOTIFICATION",
});