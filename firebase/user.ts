import {firestore} from '../config/firebase';
import {
  GoogleSignin,
  statusCodes,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';

// export const addUserInfo = async () => {
//     try {
//         const docRef = await firestore.collection(collectionName).add(data);
//         console.log('Document added with ID: ', docRef.id);
//         return docRef.id; // Return the ID of the added document
//       } catch (error) {
//         console.error('Error adding document: ', error);
//         throw error;
//       }
// };

export const signInWithGoogle = async (setState: ({}) => void) => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setState({userInfo, error: undefined});
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // user cancelled the login flow
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // play services not available or outdated
          break;
        default:
        // some other error happened
      }
    } else {
      // an error that's not related to google sign in occurred
      console.log(error);
    }
  }
};
