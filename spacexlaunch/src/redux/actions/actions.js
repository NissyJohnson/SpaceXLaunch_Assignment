import * as types from '../types/types';

const baseUrl = 'https://api.spacexdata.com/v3/launches?limit=100';

export const loadingIndicator = (loading) => ({
  type: types.LOADING_INDICATOR,
  loading
});

export const cardDetail = (item) => {
  return {
    missionName: item.mission_name,
    flightNumber: item.flight_number,
    missionId: item.mission_id,
    launchYear: item.launch_year,
    launchSuccess: item.launch_success,
    landSuccess: item.rocket.first_stage.cores[0].land_success,
    image: item.links.mission_patch_small,
  };
};
export const launchYear = () => async (dispatch) => {
  try {
    dispatch(loadingIndicator(true));
    const response = await fetch(baseUrl);
    const res = await response.json();
    if (res !== undefined && res !== null) {
      const years = res && Array.prototype.map.call(res, (item) => item.launch_year);
      const cardDetails = res && Array.prototype.map.call(res, (item) => cardDetail(item));
      const launchYears = Array.from(new Set(years));
      dispatch({ type: types.LAUNCH_YEARS, launchYears });
      dispatch({ type: types.CARD_DETAILS, cardDetails });
      dispatch(loadingIndicator(false));
    }
  } catch (e) {
    throw new Error('API CALL Error');
  }
};

export const launchLandSuccess = (type) => async (dispatch) => {
  try {
    let fetchUrl;
    if (type === 'launchSuccess') fetchUrl = `${baseUrl}&launch_success=true`;
    if (type === 'landSuccess') fetchUrl = `${baseUrl}&launch_success=true&land_success=true`;
    if (type === 'launchfail') fetchUrl = `${baseUrl}&launch_success=true&land_success=fail`;
    const response = await fetch(fetchUrl);
    const res = await response.json();
    if (res !== undefined || res.length !== 0) {
      const cardDetails = res && Array.prototype.map.call(res, (item) => cardDetail(item));
      dispatch({ type: types.CARD_DETAILS, cardDetails });
    }
  } catch (e) {
    throw new Error('API CALL Error');
  }
};
export const launchyearSuccess = (type, year) => async (dispatch) => {
  try {
    let fetchUrl;
    if (type === 'launchSuccess') {
      fetchUrl = `${baseUrl}&launch_success=true&launch_year=${year}`;
    } else if (type === 'landSuccess') {
      fetchUrl = `${baseUrl}&launch_success=true&land_success=true&launch_year=${year}`;
    } else if (type === 'launchfail') {
      fetchUrl = `${baseUrl}&launch_success=true&land_success=fail&launch_year=${year}`;
    }
    const response = await fetch(fetchUrl);
    const res = await response.json();
    if (res !== undefined && res !== null) {
      const cardDetails = res && Array.prototype.map.call(res, (item) => cardDetail(item));
      dispatch({ type: types.CARD_DETAILS, cardDetails });
    }
  } catch (e) {
    throw new Error('API CALL Error');
  }
};
