import { CONTESTANT_LIST, CONTESTANT_TEAM_LIST } from "../constants/contestantTypes";

const initialState = {
};

const contestantReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTESTANT_LIST:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case CONTESTANT_TEAM_LIST:
      return {
        ...state,
        teamP: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default contestantReducer;
