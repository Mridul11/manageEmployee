import * as actions from '../actions';

const initialState = {
  email : '',
  password : '',
  user : null,
  error : '',
  loadong :false
}

export default (state = initialState, action) => {
  switch(action.type){
      case 'email_changed' :
        return {
          ...state , email : action.payload
        }
      case 'password_changed' :
        return {
            ...state , password : action.payload
        }
        case 'login_user_loader' :
           return{
              ...state, loading :true, error : ''
            }
      case 'login_user_success':
        return {
          ...state, user : action.payload, error: '', loading: false
        }
     case 'login_user_fail':
        return{
          ...state, error : 'Authentication Failed.', password : '', loading: false
        }
    default:
      return state;
  }
}
