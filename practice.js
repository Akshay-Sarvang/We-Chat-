
//ADD YOUR FIREBASE LINKS
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
  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}