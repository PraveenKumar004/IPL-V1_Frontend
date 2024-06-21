import { ADD_PLAYER, GET_PLAYERS, SELECT_PLAYER, SOLD_PLAYERS, UNSOLD_PLAYERS } from '../constants/playerTypes';

const initialState = {
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case GET_PLAYERS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case SOLD_PLAYERS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case UNSOLD_PLAYERS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case SELECT_PLAYER:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default playerReducer;
