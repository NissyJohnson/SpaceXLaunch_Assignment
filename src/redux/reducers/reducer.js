import * as types from '../types/types';

const initialState = {
  loading: true,
};

const Reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.LAUNCH_YEARS:
      // eslint-disable-next-line prefer-object-spread
      return { ...state, launchYears: action.launchYears };

    case types.LOADING_INDICATOR:
      // eslint-disable-next-line prefer-object-spread
      return { ...state, loading: action.loading };

    case types.CARD_DETAILS:
      // eslint-disable-next-line prefer-object-spread
      return { ...state, cardDetails: action.cardDetails };

    case types.NO_RECORDS:
      // eslint-disable-next-line prefer-object-spread
      return { ...state, noRecords: true };

    default:
      return state;
  }
};

export default Reducer;
