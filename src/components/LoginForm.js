import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button} from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component{

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onBtnPress(){
    const {email , password} = this.props;

    this.props.loginUser({email, password});
  }

  render(){
    return(
      <Card>
          <CardSection>
            <Input
              label = "Email"
              placeholder = "example@gmail.com"
              onChangeText = {this.onEmailChange.bind(this)}
              value = {this.props.email}
              />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label = "Password"
              placeholder = "password"
              onChangeText = {this.onPasswordChange.bind(this)}
              value = {this.props.password}
            />
          </CardSection>
          <CardSection>
              <Button onPress ={this.onBtnPress.bind(this)}>
                Login
              </Button>
          </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return{
          email : state.auth.email,
          password : state.auth.password
  }
}

export default connect(mapStateToProps , {emailChanged , passwordChanged, loginUser})(LoginForm);
