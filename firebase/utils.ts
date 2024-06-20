import {firestore} from '../config/firebase';
import {User} from '../src/common/types';
import {DocumentData} from 'firebase/firestore';

const dataPoint = <T extends DocumentData>(collectionString: string) =>
  firestore.collection<T>(collectionString);

const db = {
  users: dataPoint<User>('users'),
};

export {db};
