const initialState = {
  color: ''
};

const SET_COLOR = 'SET_COLOR';

export const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
};

export const setColor = (color) => ({ type: SET_COLOR, payload: color });
