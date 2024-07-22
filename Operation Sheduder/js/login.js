// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg-Hq0rJr8QsQMTA5ZEayOvzqZ1Gb4CNI",
  authDomain: "operation-sheduler.firebaseapp.com",
  databaseURL: "https://operation-sheduler-default-rtdb.firebaseio.com",
  projectId: "operation-sheduler",
  storageBucket: "operation-sheduler.appspot.com",
  messagingSenderId: "125099027205",
  appId: "1:125099027205:web:464467fa5c6d2d020aa56c",
  measurementId: "G-VN3J6R2VFE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Login successful
          alert('Login successful');
          // Redirect to admin dashboard or another page
          window.location.href = 'adminDashboard.html';
      })
      .catch((error) => {
          // Login failed
          console.error('Error logging in: ', error);
          alert('Login failed: ' + error.message);
      });
});
