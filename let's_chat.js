//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC1m8q4nA3vIC_1U_i9NxdATDiQlJbg3vg",
      authDomain: "kwitter-87a84.firebaseapp.com",
      databaseURL: "https://kwitter-87a84-default-rtdb.firebaseio.com",
      projectId: "kwitter-87a84",
      storageBucket: "kwitter-87a84.appspot.com",
      messagingSenderId: "789387005820",
      appId: "1:789387005820:web:beaccfa15b6c84771e1ef9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
/////////////////////////////////////////////////////////////

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
////////////////////////////////////////////////////////////
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
like:0

});
document.getElementById("msg").value="";
}
/////////////////////////////////////////////////////////////




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();













































function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}