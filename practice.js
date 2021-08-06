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

  function add_username()
{
user_name=document.getElementById("user_name").value; 
firebase.database().ref("/").child(user_name).update({
purpose:'adding user'    
});
}
