import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface INews {
  Title: string;
  Source: string;
  Url: string;
  PublishedOn: string;
  Description: string;
  Image: string;
  SourceNationality: string;
  TitleSentiment: string;
  Summary: string;
  Countries?: [];
  Cities?: [];
  Categories?: {
    label: string | undefined;
    IPTCCode: string;
  };
}

export interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  created: FirebaseFirestoreTypes.Timestamp;
  updated: FirebaseFirestoreTypes.Timestamp;
}

export interface UserSignUpInput {
  email: string;
  fullName: string;
  phoneNumber: string;
}
