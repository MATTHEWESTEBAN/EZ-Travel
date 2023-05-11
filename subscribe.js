const firebaseConfig = {
    apiKey: "AIzaSyDuvIQ8TiYmTr10klCV9m_mR-K5RsYYaDE",
    authDomain: "subscribe-d6a33.firebaseapp.com",
    databaseURL: "https://subscribe-d6a33-default-rtdb.firebaseio.com",
    projectId: "subscribe-d6a33",
    storageBucket: "subscribe-d6a33.appspot.com",
    messagingSenderId: "864800994244",
    appId: "1:864800994244:web:d5e89a3f10366b744eea91"
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