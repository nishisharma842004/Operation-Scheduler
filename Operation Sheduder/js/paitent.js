// Adding a new patient to Firestore
function addPatient(patient) {
    firebase.firestore().collection("patients").add(patient)
      .then((docRef) => {
        console.log("Patient added with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding patient: ", error);
      });
  }
  
  // Example patient object
  const patient = {
    name: "Jane Doe",
    age: 45,
    ailment: "Heart Disease",
  };
  addPatient(patient);
  