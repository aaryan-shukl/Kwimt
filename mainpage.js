function logout() {
     localStorage.removeItem("U");
     window.location = "login.html";
}
function getdata() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   });});
    
}
const confrig = {
    apiKey: "AIzaSyCDrWpHdG5axhyGQgowGE8s4E3OfrKsmCI",
    authDomain: "kwimt-dd308.firebaseapp.com",
    databaseURL: "https://kwimt-dd308-default-rtdb.firebaseio.com",
    projectId: "kwimt-dd308",
    storageBucket: "kwimt-dd308.appspot.com",
    messagingSenderId: "985927316423",
    appId: "1:985927316423:web:4e48282518ff7e048fdfe2"
};