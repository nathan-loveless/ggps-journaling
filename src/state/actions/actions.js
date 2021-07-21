export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const signupSubmit = (data, props) => async dispatch => {
  console.log('Hit signupSubmit');
  dispatch({ type: SIGNUP_SUBMIT, payload: data });
};

export const loginSubmit = (data, props) => async dispatch => {};
