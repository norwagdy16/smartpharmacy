// Wait for the DOM content to be loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the input fields by their IDs
  let existingUsername = document.querySelector("#existingUsername");
  let existingPassword = document.querySelector("#existingPassword");
  let signIn = document.querySelector("#signIn");

  // Get the stored username and password for patient and pharmacy from localStorage
  let getusernamepatient = localStorage.getItem("patientName");
  let getpasswordpatient = localStorage.getItem("patientPassword");
  let getusernamepharmacy = localStorage.getItem("pharmacyName");
  let getpasswordpharmacy = localStorage.getItem("pharmacyPassword");
  let getusernamedoctor = localStorage.getItem("doctorName");
  let getpassworddoctor = localStorage.getItem("doctorPassword");

  // Add event listener to the sign-in button
  signIn.addEventListener("click", function (e) {
    e.preventDefault();
    // Check if the input fields are empty
    if (existingUsername.value === "" || existingPassword.value === "") {
      alert("Please fill in all the fields");
    } else {
      // Check if the entered username and password match the stored values for patient
      if (
        existingUsername.value === getusernamepatient &&
        existingPassword.value === getpasswordpatient
      ) {
        // Redirect to index.html after a delay
        setTimeout(() => {
          window.location = "index.html";
          console.log(existingUsername.value, existingPassword.value);
        });
      }
      // Check if the entered username and password match the stored values for pharmacy
      else if (
        existingUsername.value === getusernamepharmacy &&
        existingPassword.value === getpasswordpharmacy
      ) {
        // Redirect to index.html after a delay
        setTimeout(() => {
          window.location = "index.html";
        });
      } 
      // Check if the entered username and password match the stored values for doctor
      else if (
        existingUsername.value === getusernamedoctor &&
        existingPassword.value === getpassworddoctor
      ) {
        // Redirect to index.html after a delay
        setTimeout(() => {
          window.location = "index.html";
        });
      }
      else {
        // If no match is found, display an alert
        alert("Incorrect username or password");
      }
    }
  });
});
