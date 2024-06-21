import { ADD_MANAGER, VERIFY_MANAGER, JOIN_ROOM, GET_RESPONSE, MANAGER_DETAILS } from '../constants/managerTypes';

const initialState = {
};

const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANAGER:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case VERIFY_MANAGER:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case JOIN_ROOM:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case GET_RESPONSE:
      return {
        ...state,
        data: true,
        error: null,
      };

    case MANAGER_DETAILS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default managerReducer;
