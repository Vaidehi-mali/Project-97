
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyC2IKBz7AOz-kIdoLoHh8kS1rJGwd5tPiA",
  authDomain: "project-93-e01c2.firebaseapp.com",
  databaseURL: "https://project-93-e01c2-default-rtdb.firebaseio.com",
  projectId: "project-93-e01c2",
  storageBucket: "project-93-e01c2.appspot.com",
  messagingSenderId: "925503157996",
  appId: "1:925503157996:web:a63cbfb6f4eb2008c6d7c9",
  measurementId: "G-54EVE1EXTX"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code

     //End code
     });});}

function addRoom()
     {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    Room_names = childKey;

    console.log("Room Nmae - " + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;

});});}


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";

}

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value="";
}
