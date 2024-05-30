let patientName = document.querySelector("#patientName");
let patientEmail = document.querySelector("#patientEmail");
let patientPassword = document.querySelector("#patientPassword");
let patientGovernorate = document.querySelector("#patientGovernorate");
let patientCity = document.querySelector("#patientCity");
let patientPhone = document.querySelector("#patientPhone");
let patientLocation = document.querySelector("#patientLocation");
let signUp = document.querySelector("#signUp");
signUp.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    patientName.value == "" ||
    patientEmail.value == "" ||
    patientPassword.value == "" ||
    patientGovernorate.value == "" ||
    patientCity.value == "" ||
    patientPhone.value == "" ||
    patientLocation.value == ""
  ) {
    alert("Please fill all the Data");
  } else {
    localStorage.setItem("patientName", patientName.value);
    localStorage.setItem("patientEmail", patientEmail.value);
    localStorage.setItem("patientPassword", patientPassword.value);
    localStorage.setItem("patientGovernorate", patientGovernorate.value);
    localStorage.setItem("patientCity", patientCity.value);
    localStorage.setItem("patientPhone", patientPhone.value);
    localStorage.setItem("patientLocation", patientLocation.value);

    setTimeout(() => {
      window.location = "index.html";
    });
  }
});

// pharmacy
let pharmacyName = document.querySelector("#pharmacyName");
let pharmacyEmail = document.querySelector("#pharmacyEmail");
let pharmacyPhone = document.querySelector("#pharmacyPhone");
let pharmacyPassword = document.querySelector("#pharmacyPassword");
let pharmacyLocation = document.querySelector("#pharmacyLocation");
let pharmacyGovernorate = document.querySelector("#pharmacyGovernorate");
let pharmacyCity = document.querySelector("#pharmacyCity");
let signUpPH = document.querySelector("#signUpPH");
signUpPH.addEventListener("click", function(e) {
    e.preventDefault();
    if (
      pharmacyName.value == "" ||
      pharmacyEmail.value == "" ||
      pharmacyPhone.value == "" ||
      pharmacyLocation.value == "" ||
      pharmacyGovernorate.value == "" ||
      pharmacyCity.value == "" ||
      pharmacyPassword.value == ""
    ) {
      alert("Please fill all the fields");
    } else {
      localStorage.setItem("pharmacyName", pharmacyName.value);
      localStorage.setItem("pharmacyEmail", pharmacyEmail.value);
      localStorage.setItem("pharmacyPhone", pharmacyPhone.value);
      localStorage.setItem("pharmacyPassword", pharmacyPassword.value);
      localStorage.setItem("pharmacyLocation", pharmacyLocation.value);
      localStorage.setItem("pharmacyCity", pharmacyCity.value);
      localStorage.setItem("pharmacyGovernorate", pharmacyGovernorate.value);

      setTimeout(() => {
        window.location = "../Pharmacy Home/Pharmacyhome.html";
      });
    }
});
    
