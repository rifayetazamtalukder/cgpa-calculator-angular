import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export interface Feedback {
    id?: string,
    username?: string,
    email?: string,
    title?: string,
    description?: string,
    datetime?: Timestamp
}
