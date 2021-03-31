function logout() {
    localStorage.removeItem("U");
    window.location = "login.html";
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
var welcomename = localStorage.getItem("U");
document.getElementById("welcome-heading").innerHTML = "Welcome" + welcomename + "!";
function CreateRoom() {
    var CreatedRoomName = document.getElementById("roomname").value;
    firebase.database().ref("/").child(CreatedRoomName).update({
        purpose: "Adding roomname in firebase"
    });
    localStorage.setItem("newroomname",CreatedRoomName);
    window.location = "roompage.html";
}
function getdata() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {var childKey  = childSnapshot.key;
        var RoomNames = childKey;
        console.log(RoomNames);
        var roomnamedisplay = "<div class='display' id='#" + RoomNames + "' onclick='addroomuser(this.id)'>#" + RoomNames + "</div><hr>";
        document.getElementById("available-rooms").innerHTML = roomnamedisplay;
        function addroomuser(thispara) {
            localStorage.setItem("roomname",RoomNames);
            window.location = "room.html";
        }
    });});
}