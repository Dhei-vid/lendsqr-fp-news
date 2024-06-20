import {GOOGLE_WEB_CLIENT_ID} from '@env';
import {
  GoogleSignin,
  statusCodes,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {User, UserSignUpInput} from '../src/common/types';
import {db} from './utils';
import {
  firebase,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});

export type IGoogleLogin = {
  idToken: string;
  user: any;
};

/**
 * Trigger Google User Authentication
 * @returns Token ID and user
 */
export const GoogleLogin = async (): Promise<IGoogleLogin | null> => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();

    return userInfo as IGoogleLogin;
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          Alert.alert('User cancelled the login flow');
          break;
        case statusCodes.IN_PROGRESS:
          Alert.alert('Operation (e.g., sign in) is already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert('Play services not available or outdated');
          break;
        default:
          Alert.alert('Some other error happened: ' + error.message);
      }
    } else {
      console.error('An error occurred: ', error);
    }
    return null;
  }
};

/**
 * Sign out user
 */
export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    await auth().signOut();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Sign Up user
 * @param input
 */
export const signUpUser = async (input: User) => {
  try {
    const response = await GoogleLogin();
    const {idToken} = response as IGoogleLogin;

    if (idToken) {
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      // getting user credentials
      const user = userCredential.user;
      if (user) {
        // getting user ID
        const userId = user.uid;

        // store user records to firebase
        await createUser(userId, input);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Create user record in Firebase
 */
export const createUser = async (userId: string, input: User) => {
  try {
    db.users.doc(userId).set({
      ...input,
      created:
        firebase.firestore.FieldValue.serverTimestamp() as FirebaseFirestoreTypes.Timestamp,
      updated:
        firebase.firestore.FieldValue.serverTimestamp() as FirebaseFirestoreTypes.Timestamp,
    });
  } catch (error) {
    console.error('Error saving user data: ', error);
  }
};
