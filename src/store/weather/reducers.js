const initialState = {
  errorText: '',
};

const weatherReducer = (action, state = initialState) => {
  switch (action.type) {
    case 'SET_WEATHER_ERROR_TEXT':
      return { ...state, errorText: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
