import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));

export default class App extends Component {

  componentWillMount(){
    const config = {
    apiKey: 'AIzaSyATFn6Wovm0YCWKG4cq1mfhldxYEAY4qFo',
    authDomain: 'manager-8fb13.firebaseapp.com',
    databaseURL: 'https://manager-8fb13.firebaseio.com',
    projectId: 'manager-8fb13',
    storageBucket: 'manager-8fb13.appspot.com',
    messagingSenderId: '775272019537'
  };
  firebase.initializeApp(config);
};

  render() {
    return (
      <Provider store = {store}>
        <View style={{marginTop : 60}}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
