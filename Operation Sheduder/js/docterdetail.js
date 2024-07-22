// Your Firebase configuration details
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDg-Hq0rJr8QsQMTA5ZEayOvzqZ1Gb4CNI",
    authDomain: "operation-sheduler.firebaseapp.com",
    databaseURL: "https://operation-sheduler-default-rtdb.firebaseio.com",
    projectId: "operation-sheduler",
    storageBucket: "operation-sheduler.appspot.com",
    messagingSenderId: "125099027205",
    appId: "1:125099027205:web:642e087ffd5d166c0aa56c",
    measurementId: "G-PWT281W1N4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  var db = firebase.firestore();
  
  // Get form elements
  const doctorForm = document.getElementById('doctorForm');
  const nameInput = document.getElementById('name');
  const specialtyInput = document.getElementById('specialty');
  const availableHoursInput = document.getElementById('availableHours');
  
  // Add event listener to the form
  doctorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = nameInput.value;
      const specialty = specialtyInput.value;
      const availableHours = availableHoursInput.value;
  
      // Add doctor details to Firestore
      db.collection('doctors').add({
          name: name,
          specialty: specialty,
          availableHours: availableHours
      })
      .then(() => {
          alert('Doctor added successfully');
          doctorForm.reset();
      })
      .catch((error) => {
          console.error('Error adding document: ', error);
      });
  });
  