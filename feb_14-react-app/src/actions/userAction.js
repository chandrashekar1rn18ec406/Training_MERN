export const adduser = (users) => {
  return {
    type: "ADDUSER",
    payload: users,
  };
};
