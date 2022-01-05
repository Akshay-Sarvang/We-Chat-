
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyDzeUtFvBQI9cv3Mvbat-BhqKiEn1WwRVU",
    
      authDomain: "kwitter-69d72.firebaseapp.com",
    
      databaseURL: "https://kwitter-69d72-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-69d72",
    
      storageBucket: "kwitter-69d72.appspot.com",
    
      messagingSenderId: "180720514912",
    
      appId: "1:180720514912:web:ccf48ccd5374a184e0d005",
    
      measurementId: "G-12R77CREB8"
    
    };
    
    
    // Initialize Firebase
    
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
        }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}