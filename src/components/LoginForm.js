import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
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

  renderButton(){
    if(this.props.loading){
    return <Spinner size= "large" />
    };
    return (
        <Button onPress ={this.onBtnPress.bind(this)}>
          Login
        </Button>
      );
  }

  render(){
    console.log(this.props.loading)
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

        <Text style={{fontSize : 18, alignSelf : 'center', color:'red'}}>
          {this.props.error}
        </Text>

          <CardSection>
              {this.renderButton()}
          </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return{
          email : state.auth.email,
          password : state.auth.password,
          error : state.auth.error,
          loading : state.auth.loading
  }
}

export default connect(mapStateToProps , {emailChanged , passwordChanged, loginUser})(LoginForm);
