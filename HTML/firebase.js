//Firebase Zeugs
/* const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore"); */

// Initialize Cloud Firestore through Firebase
var config = {
  "apiKey": "AIzaSyAUHFqNblYKWTCrje07bkdNeorlQ4IuNEs",
  "appId": "1:728300584033:web:ed2bf8534da27bacc53e20",
  "authDomain": "iamphysiotherappy-17757.firebaseapp.com",
  "databaseURL": "https://iamphysiotherappy-17757.firebaseio.com",
  "measurementId": "G-SR5XN6N10J",
  "messagingSenderId": "728300584033",
  "projectId": "iamphysiotherappy-17757",
  "storageBucket": "iamphysiotherappy-17757.appspot.com"
};

/* db.collection("Nutzer").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}); */

document.addEventListener("DOMContentLoaded", function() { 
	console.log("test_firebase");
	firebase.initializeApp(config);
	var db = firebase.firestore();
	const inputTextField = document.querySelector("testtext");
	const saveButton = document.querySelector("saveButton");
	console.log(saveButton);
	saveButton.addEventListener("click", function() {
		const textToSave = inputTextField.value;
		console.log("Folgender Text wird gespeichert " + textToSave);
		db.collection("Nutzer").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(`${doc.id} => ${doc.data()}`);
			});
		});
	});
};	