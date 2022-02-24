const allUser = [];
const userReducer = (state = allUser, action) => {
  switch (action.type) {
    case "ADDUSER":
      return state;
    default:
      return state;
  }
};

export default userReducer;
