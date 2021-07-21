import { SIGNUP_SUBMIT, LOGIN_SUBMIT } from '../actions/actions';
const initialState = {
  user: {
    firstName: '',
    lastName: '',
    username: '',
    email: ''
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUBMIT: {
      console.log('Hit reducer signupSubmit');
      return { ...state, user: action.payload.data };
    }
    case LOGIN_SUBMIT: {
      break;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
