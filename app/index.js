//Packages
import React from 'react';

//Files
import { createRootNavigator } from './router';
import { isSignedIn } from './auth';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      session: {
        username: null,
        password: null
      }
    };
  }

  componentDidMount(){
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('An error ocurred'))
  }

  render(){
    const { checkedSignIn, signedIn } = this.state;
    console.log(this.state.session.username)

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout
              screenProps={{
                session: this.state.session,
                handleChange: this.handleChange
              }}/>;
  }

  // Handling state Methods

  handleChange = (name, value) => {
    this.setState({
      session: {
        ...this.state.session,
        [name]: value
      }
    });
  }

}//
