import { GET_COUNT_CONTESTANT, GET_COUNT_MANAGER, GET_COUNT_PLAYER } from "../constants/adminTypes";

const initialState = {
};

const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNT_MANAGER:
      return {
        ...state,
        mcount: action.payload,
        error: null,
      };

    case GET_COUNT_CONTESTANT:
      return {
        ...state,
        ccount: action.payload,
        error: null,
      };

    case GET_COUNT_PLAYER:
      return {
        ...state,
        pcount: action.payload,
        error: null,
      };


    default:
      return state;
  }
};

export default managerReducer;
