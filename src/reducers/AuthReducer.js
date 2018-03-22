import * as actions from '../actions';

const initialState = {
  email : '',
  password : ''
}

export default (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    case 'email_changed' :
      return {
        ...state , email : action.payload
      }
      case 'password_changed' :
      return {
          ...state , password : action.payload
      }
    default:
      return state;
  }
}
