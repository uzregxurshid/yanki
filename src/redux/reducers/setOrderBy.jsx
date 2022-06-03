const initialState = {
  order: ''
};

const SET_ORDER = 'SET_ORDER';

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};

export const setOrder = (order) => ({ type: SET_ORDER, payload: order });
