export const ERROR = 'ERROR';
export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
export const TOGGLE_DROP_DOWN = 'TOGGLE_DROP_DOWN';
export const UPDATE_LOAD_OVERLAY = 'UPDATE_LOAD_OVERLAY';

// Local URL:
// const URL = "http://localhost:5000/api";

export const changeBackground = newColor => dispatch => {
  console.log('newColor:', newColor);
  dispatch({ type: CHANGE_BACKGROUND, action: newColor });
};

export const toggleDropDown = () => dispatch => {
  console.log('toggleDropDown triggered!');
  dispatch({ type: TOGGLE_DROP_DOWN });
};

export const updateLoadOverlay = (styles) => dispatch => {
  console.log('updateLoadOverlay triggered!');
  dispatch({ type: UPDATE_LOAD_OVERLAY, styles: styles });
};