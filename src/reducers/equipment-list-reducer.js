import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { id, formattedWaitTime } = action;
  switch (action.type) {
    case c.DELETE_ITEM:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const updatedITEM = Object.assign({}, state[id], { formattedWaitTime });
      const updatedState = Object.assign({}, state, {
        [id]: updatedITEM,
      });
      return updatedState;
    default:
      return state;
  }
};
