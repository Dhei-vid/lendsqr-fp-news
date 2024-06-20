import firebase from '@react-native-firebase/app';
import * as _storage from '@react-native-firebase/storage';
import * as _firestore from '@react-native-firebase/firestore';
import * as _analytics from '@react-native-firebase/analytics';
import * as _crashlytics from '@react-native-firebase/crashlytics';
import * as _performance from '@react-native-firebase/perf';
import * as _auth from '@react-native-firebase/auth';

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Create instances or initialize modules
const firestore = _firestore.default();
const auth = _auth.default();
const storage = _storage.default();
const performance = _performance.default();
const analytics = _analytics.default();
const crashlytics = _crashlytics.default();

// Export named instances
export {
  firebase as default,
  firestore,
  auth,
  analytics,
  crashlytics,
  performance,
  storage,
};
