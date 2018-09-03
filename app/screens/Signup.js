import React from "react";
import { View, Text, Animated } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default class Signup extends React.Component{
  state = {
    error: "",
    username: "",
    password: "",
    confirmPass: ""
  }

  signUp = () => {
    if (this.state.password == this.state.confirmPass){
      onSignIn({
        username: this.state.username,
        password: this.state.password
      }).then(() => navigation.navigate("SignedIn"));
    } else {
      this.setState({ error: 'Passwords should be the same!'})
    }
  }

  render(){
    const { navigation } = this.props
    const user = this.props.screenProps.session
    //
    // value={this.props.screenProps.session.username}
    // onChangeText={(text) => this.props.screenProps.handleChange("username", text)}

    return(
      <View style={{ paddingVertical: 100 }}>
        <Text>{this.state.error}</Text>
          <FormLabel>Username</FormLabel>
          <FormInput
                     placeholder="Username..."
                     name='username'
                     onChangeText={(text) => this.setState({ username: text })}
                  />
          <FormLabel>Password</FormLabel>
          <FormInput
                     secureTextEntry
                     placeholder="Password..."
                     name='password'
                     onChangeText={(text) => this.setState({ password: text })}
                  />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
                     secureTextEntry
                     placeholder="Confirm Password..."
                     name='confirmPass'
                     shake={this.state.error}
                  />

          <Button
            buttonStyle={{ marginTop: 20, borderRadius: 30, borderWidth: 2, borderColor: '#a94e4c' }}
            backgroundColor="transparent"
            textStyle={{ color: "#a94e4c" }}
            title="SIGN UP"
            onPress={() => {
              this.signUp()
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
      </View>
    )
  }
}; //
