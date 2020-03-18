console.log("hisjdf")
 var config = {
    apiKey: "AIzaSyCD1O9kr3h8LZXb9WSVYcBqaBm1oQUUg6E",
    authDomain: "midhi-reastaurant.firebaseapp.com",
    databaseURL: "https://midhi-reastaurant.firebaseio.com",
    projectId: "midhi-reastaurant",
    storageBucket: "midhi-reastaurant.appspot.com",
    messagingSenderId: "716943969034",
    appId: "1:716943969034:web:39f8b6e9d7048afad448f3"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages'); 

document.getElementById("contactForm").addEventListener('submit',submitForm);

function getInputVal(id){
    return document.getElementById(id).value
}

function submitForm(e){
e.preventDefault()


var name = getInputVal("name");
var email = getInputVal("email");
var number = getInputVal("number");
var message = getInputVal("message");
console.log(name)
console.log(email)
console.log(number)
console.log(message)

saveMessages(name,email,number,message)

console.log("hii",saveMessages(name,email,number,message))
document.getElementById("contactForm").reset();

}


//save Messages

function saveMessages(name,email,number,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        number:number,
        message:message
    })
}