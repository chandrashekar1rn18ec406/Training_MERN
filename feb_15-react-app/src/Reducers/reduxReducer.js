const initialState = {
  voterList: [],
};

function rootReducers(state = initialState, actions) {
  if (actions.type === "VOOTER_LIST") {
    state.voterList.push(actions.payload);
  }
  return state;
}

export default rootReducers;
