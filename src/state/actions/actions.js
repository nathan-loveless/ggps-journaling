import { Auth } from 'aws-amplify';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const signupSubmit = (data, props) => async dispatch => {
  try {
    await Auth.signUp({
      username: data.email,
      password: data.password,
      attributes: {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
        preferred_username: data.username
      }
    });
  } catch (error) {
    console.log('ERROR: ', error);
  }

  Auth.currentAuthenticatedUser({
    bypassCache: false
  })
    .then(user => {
      localStorage.setItem(
        'token',
        user.signInUserSession.accessToken.jwtToken
      );
      console.log(user);
    })
    .catch(error => console.log(error));
  dispatch({ type: SIGNUP_SUBMIT, payload: data });
  props.history.push('/journal');
};

export const loginSubmit = (data, props) => async dispatch => {
  try {
    await Auth.signIn({
      username: data.username,
      password: data.password
    });
  } catch (error) {
    console.log('ERROR: ', error);
  }

  Auth.currentAuthenticatedUser({
    bypassCache: false
  })
    .then(user => {
      localStorage.setItem(
        'token',
        user.signInUserSession.accessToken.jwtToken
      );

      console.log(user);
    })
    .catch(error => console.log(error));
  dispatch({ type: LOGIN_SUBMIT, payload: data });
  props.history.push('/journal');
};
