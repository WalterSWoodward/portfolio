export const ERROR = 'ERROR';
export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
export const TOGGLE_DROP_DOWN = 'TOGGLE_DROP_DOWN';

export const changeBackground = newColor => dispatch => {
  dispatch({ type: CHANGE_BACKGROUND, action: newColor });
};

export const toggleDropDown = () => dispatch => {
  dispatch({ type: TOGGLE_DROP_DOWN });
};