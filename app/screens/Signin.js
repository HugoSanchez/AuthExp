import React from "react";
import { View, Text } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";


export default class Signin extends React.Component{

  render(){
    return(
      <View style={{ paddingVertical: 20 }}>

        <Card title="SIGN IN">
          <FormLabel>Username</FormLabel>
          <FormInput placeholder="Username address..." value={this.props.screenProps.session.username}
                     onChangeText={(text) => this.props.screenProps.handleChange("username", text)}
                    />

          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry
                     placeholder="Password..."
                     onChangeText={(text) => this.props.screenProps.handleChange("password", text)}
                    />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={() => {
              onSignIn().then(() => navigation.navigate('SignedIn'));
            }}
          />
        </Card>
      </View>
    )
  }
}
