// Wait for the DOM content to be loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the input fields by their IDs
  let existingUsername = document.querySelector("#existingUsername");
  let existingPassword = document.querySelector("#existingPassword");
  let signIn = document.querySelector("#signIn");

  // Get the stored username and password for patient and pharmacy from localStorage
  // Get data from localStorage
  let getusernamepatient = localStorage.getItem("patientName");
  let getpasswordpatient = localStorage.getItem("patientPassword");
  let getusernamepharmacy = localStorage.getItem("pharmacyName");
  let getpasswordpharmacy = localStorage.getItem("pharmacyPassword");
  let getdoctorName = document.querySelector("#doctorName");
  let getdoctorPassword = document.querySelector("#doctorPassword");

  // Create an array to hold the data
  let userpatientArray = [
    {
      username: getusernamepatient,
      password: getpasswordpatient,
      role: "patient",
    },
    {
      username: getusernamepharmacy,
      password: getpasswordpharmacy,
      role: "pharmacy",
    },
    {
      username: getdoctorName,
      password: getdoctorPassword,
      role: "pharmacy",
    },
  ];
  
  // Convert the array to a string and store it in localStorage
  localStorage.setItem("userData", JSON.stringify(userDataArray));

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
          window.location = "../Pharmacy Home/Pharmacyhome.html";
        });
      } 
      else if (
        existingUsername.value === getdoctorName &&
        existingPassword.value === getdoctorPassword
      ) {
        // Redirect to index.html after a delay
        setTimeout(() => {
          window.location = "../Doctor Home/Doctorhome.html";
        });
      } else {
        // If no match is found, display an alert
        alert("Incorrect username or password");
      }
    }
  });
});
