import React, {createContext} from 'react';
import app from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
const FirebaseContext = createContext(null);
export {FirebaseContext};

export default ({children}) => {
  if (!app.apps.length) {
    app.initializeApp(firebaseConfig);
  }

  let firebase = {
    app: app,
    database: app.firestore,
    auth: app.auth,
    functions: app.functions,
  };

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};
