var firebaseConfig = {
  apiKey: "AIzaSyD2V3Ak8Eo79tJXYdYcCf8Sv1Bg4UctCJ0",
  authDomain: "contact-form-c9405.firebaseapp.com",
  projectId: "contact-form-c9405",
  storageBucket: "contact-form-c9405.appspot.com",
  messagingSenderId: "5426219613",
  appId: "1:5426219613:web:2a755e77ad170230df9bb4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference messages collection

const messagesRef = firebase.database().ref("messages");

const submitForm = (e) => {
  e.preventDefault();

  //Get all values
  const name = getValues("name");
  const company = getValues("company");
  const email = getValues("email");
  const phone = getValues("phone");
  const message = getValues("message");

  //save message to firebase
  saveMessage(name, company, email, phone, message);

  //Show confirmation alert

  document.querySelector(".alert").style.display = "block";

  //Hide alert after 3 seconds

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //Clear Form

  document.getElementById("contact-form").reset();
};

//function to get form values

const getValues = (id) => {
  return document.getElementById(id).value;
};

//Save message to firebase
const saveMessage = (name, company, email, phone, message) => {
  messagesRef.push().set({
    name,
    company,
    email,
    phone,
    message,
  });
};

document.getElementById("contact-form").addEventListener("submit", submitForm);
