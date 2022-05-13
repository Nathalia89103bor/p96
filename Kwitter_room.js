const firebaseConfig = {
    apiKey: "AIzaSyDopWjna4jgBTkUusuZU3pbwy3waFXwqr0",
    authDomain: "kwitter-project-f4914.firebaseapp.com",
    databaseURL: "https://kwitter-project-f4914-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f4914",
    storageBucket: "kwitter-project-f4914.appspot.com",
    messagingSenderId: "164400513271",
    appId: "1:164400513271:web:5ec9dd062d1b02b734d3f2",
    measurementId: "G-138L4TV7BH"
  };
  
  // Initialize Firebase
  

  
  firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
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
  