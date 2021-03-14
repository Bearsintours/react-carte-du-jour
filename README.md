# Carte du Jour

A food recipe app built with React and Firebase

## Getting Started

### Installation

Clone this repository

Install dependencies
```
yarn install
```

### Prerequisites

You will need to register your app with Firebase. See [firebase docs](https://firebase.google.com/docs/web/setup)

Firebase is already installed and configured for you in this project, you will just need to create a ```.env``` file at the root level and add the following variables from your firebase config object:
```
REACT_APP_FIREBASE_API=<firebaseConfig.apiKey>
REACT_APP_FIREBASE_AUTH_DOMAIN=<firebaseConfig.authDomain>
REACT_APP_FIREBASE_PROJECT_ID=<firebaseConfig.projectId>
REACT_APP_FIREBASE_STORAGE_BUCKET=<firebaseConfig.storageBucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<firebaseConfig.messagingSenderId>
REACT_APP_FIREBASE_APP_ID=<firebaseConfig.appId>
REACT_APP_FIREBASE_MEASUREMENT_ID=<firebaseConfig.measurementId>
REACT_APP_FIREBASE_DB_URL=<firebaseConfig.databaseURL>
```

### Local development

Start the app in development mode:

```yarn start``` or ```npm start```

Open http://localhost:3000 to view it in the browser.


## Running the tests

```yarn test``` or ```npm test```


## Built With

* [React](https://create-react-app.dev/)
* [Firebase](https://firebase.google.com/)

