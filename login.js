const firebaseConfig = {
    apiKey: "AIzaSyCCSCRXz5vfrwWPWTLH2QOnkQSAg1jgAxI",
    authDomain: "form-a7ab6.firebaseapp.com",
    projectId: "form-a7ab6",
    databaseURL:"https://form-a7ab6-default-rtdb.firebaseio.com",
    storageBucket: "form-a7ab6.appspot.com",
    messagingSenderId: "722337898441",
    appId: "1:722337898441:web:d387a7a9c0c4beb6575218"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const dbRef = firebase.database().ref();

  const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
var newPost = snapshot.val();
});
function send(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var message = document.getElementById("message").value;
detailsRef.push().set({
name: name,
email: email,
phone: phone,
message: message,
});
}
