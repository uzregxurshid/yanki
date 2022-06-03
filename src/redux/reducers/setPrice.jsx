const initialState = {
  price: ''
};

const SET_PRICE = 'SET_PRICE';

export const PriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICE:
      return {
        ...state,
        price: action.payload
      };
    default:
      return state;
  }
};

export const setPrice = (price) => ({ type: SET_PRICE, payload: price });
