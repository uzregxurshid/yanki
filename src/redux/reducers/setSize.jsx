const initialState = {
  size: ''
};

const SET_SIZE = 'SET_SIZE';

export const SizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIZE:
      return {
        ...state,
        size: action.payload
      };
    default:
      return state;
  }
};

export const setSizeAction = (size) => ({ type: SET_SIZE, payload: size });
