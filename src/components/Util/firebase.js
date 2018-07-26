import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Dbg from './Debug';

class FirebaseManager {
  constructor() {
    this.user = null;
    this.SignOutDetected = null;
    this.SignInDetected = null;

    const config = {
      apiKey: 'AIzaSyDGEWgptK1HSp1XSyMPzttv6igkh9CaUC4',
      authDomain: 'qrpage-1b37d.firebaseapp.com',
      databaseURL: 'https://qrpage-1b37d.firebaseio.com',
      projectId: 'qrpage-1b37d',
      storageBucket: 'qrpage-1b37d.appspot.com',
      messagingSenderId: '935993194175'
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        // not sign in.
        Dbg.console('sign out detected');
        if (this.SignOutDetected !== null) {
          this.SignOutDetected(user);
        }
      } else {
        // サインイン済み
        Dbg.console('sign in detected');
        if (this.SignInDetected !== null) {
          this.SignInDetected(user);
        }
      }
    });
  }

  async CheckUser(mail, psw) {
    let ret = false;

    await firebase
      .auth()
      .signInWithEmailAndPassword(mail, psw)
      .then(user => {
        Dbg.console(user);
        Dbg.console('Success!');
        this.user = user;
        ret = true;
      })
      .catch(err => {
        Dbg.console(err);
        Dbg.console('Error!');
      });

    return ret;
  }

  async GetData(user) {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    let ret = {};
    await db
      .collection('machines')
      .doc('data1')
      .get()
      .then(doc => {
        if (doc.exists) {
          ret = doc.data();
        }
      });

    return ret;
  }
}

const Inst = new FirebaseManager();

export default Inst;
