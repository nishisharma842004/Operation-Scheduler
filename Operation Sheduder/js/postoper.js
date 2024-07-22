// Adding a new operation schedule to Firestore
function addOperationSchedule(schedule) {
    firebase.firestore().collection("operationSchedules").add(schedule)
      .then((docRef) => {
        console.log("Operation schedule added with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding schedule: ", error);
      });
  }
  
  // Example schedule object
  const schedule = {
    date: "2024-06-20",
    time: "10:00",
    otId: "OT1",
    anesthesia: "General",
    anesthesiologist: "Dr. Smith",
    assistantSurgeon: "Dr. Johnson",
    nurses: ["Nurse A", "Nurse B"],
    preOpEvents: "Patient preparation",
    postOpEvents: "Patient recovery",
    surgicalReports: ["report1.pdf", "report2.pdf"],
    remarks: "Successful operation",
    drugs: ["Drug1", "Drug2"],
    instruments: ["Instrument1", "Instrument2"],
  };
  addOperationSchedule(schedule);
  