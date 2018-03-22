import firebase from 'firebase';

export const emailChanged =(text) => {
  return {
    type : "email_changed",
    payload : text
  };
};

export const passwordChanged =(text) => {
  return  {
    type : "password_changed",
    payload : text
  }
}

export const loginUser = ({email, password}) =>{
  return (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
      dispatch({
                type : "login_user_success",
                payload : user
            });
       });
    }
}
