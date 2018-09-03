// Packages
import { AsyncStorage } from 'react-native';
//Files
import { signUserUp, signUserIn } from './adapter/api'

export const USER_KEY = 'auth-demo-key';

export const onSignIn = (user) => {
  //////////////////////////// Continue HERE //////////////
  //// How to handle Change in Reac Native forms?
  // And then pass state into the fetch to backend validation!
  console.log(user)
  console.log('Hit that')
  return AsyncStorage.setItem(USER_KEY, 'true');

}
export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if(res !== null) {
          resolve(true);
        }
        else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
