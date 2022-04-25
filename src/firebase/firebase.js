import firebase from 'firebase/app';
import 'firebase/firestore'
import {ApiKeys} from '../constants/ApiKeys';

if(!firebase.apps.length){
    firebase.initializeApp(ApiKeys.FirebaseConfig);
}

export const firestore = firebase.firestore();
export const timestamp = firebase.firestore.Timestamp;
export const fieldValue = firebase.firestore.FieldValue;
export default firebase;