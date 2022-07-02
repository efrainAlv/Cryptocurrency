import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

initializeApp({
    credential: applicationDefault()
});

export const users = getFirestore().collection('users');