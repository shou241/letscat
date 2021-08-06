// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBbuexHrFb18thEh63rUfXkf6m8w3ffcSM",
    authDomain: "lets-chat-fd2f8.firebaseapp.com",
    databaseURL: "https://lets-chat-fd2f8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-fd2f8",
    storageBucket: "lets-chat-fd2f8.appspot.com",
    messagingSenderId: "72642994384",
    appId: "1:72642994384:web:55c54993dcb3065b827ed5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

















user_name=localStorage.getItem("user_name", user_name);
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";


function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room"  
});
localStorage.setItem("room_name", room_name);
window.location="let's_chat.html";
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="let's_chat.html"      
}




























function log_me_out()
{
      localStorage.removeItem("user_name");
 
      window.location="index.html";
}