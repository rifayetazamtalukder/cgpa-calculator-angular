import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import 'firebase/firestore';

import { Feedback } from "../interfaces/feedback";
import { Observable } from "rxjs";

import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbackCollection: AngularFirestoreCollection<Feedback>;
  feedbacks: Observable<Feedback[]>;

  constructor(public afs: AngularFirestore) {
    // this.feedbacks = this.afs.collection('feedback').valueChanges();

    this.feedbackCollection = this.afs.collection('feedback', ref => ref.orderBy('datetime', 'desc'));

    // To get the id use snapshotChanges
    this.feedbacks = this.feedbackCollection.snapshotChanges().pipe(
      map(actions => actions.map(documentChange => {
        const data = documentChange.payload.doc.data() as Feedback;
        data.id = documentChange.payload.doc.id;

        return data;
      }))
    );
  }

  getFeedbacks() {
    return this.feedbacks;
  }

  addfeedback(data) {

    let autoId = this.afs.createId();
    let documnetId = `${data.title}-${autoId}`;
    this.feedbackCollection.doc(documnetId).set({
      username: data.username,
      email: data.email,
      title: data.title,
      description: data.description,
      datetime: data.datetime,
      read: data.read
    });
  }

  markAsRead(feedback: Feedback) {
    // this.feedbackCollection.update({
    //   "read": true;
    // })
    this.afs.collection('feedback')
      .doc(feedback.id)
      .update({
        read: true
      });

  }

  markAsUnread(feedback: Feedback) {
    this.afs.collection('feedback')
      .doc(feedback.id)
      .update({
        read: false
      });
  }

  delete_A_Feedback(feedback: Feedback) {
    this.afs.collection('feedback')
      .doc(feedback.id)
      .delete();
  }

}
