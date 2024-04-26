let patientName = document.querySelector("#patientName");
let patientEmail = document.querySelector("#patientEmail");
let patientPassword = document.querySelector("#patientPassword");
let patientGovernorate = document.querySelector("#patientGovernorate");
let patientCity = document.querySelector("#patientCity");
let patientPhone = document.querySelector("#patientPhone");
let patientLocation =document.querySelector("#patientLocation");
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
let pharmacyGovernorate = document.querySelector("#pharmacyGovernorate");
let pharmacyCity = document.querySelector("#pharmacyCity");
let pharmacyPassword = document.querySelector("#pharmacyPassword");
let pharmacyLocation = document.querySelector("#pharmacyLocation");
let signUpPH = document.querySelector("#signUpPH");
signUpPH.addEventListener("click", function(e) {
    e.preventDefault();
    if (
      pharmacyName.value == "" ||
      pharmacyEmail.value == "" ||
      pharmacyPhone.value == "" ||
      pharmacyLocation.value == "" ||
      pharmacyPassword.value == "" ||
      pharmacyGovernorate.value == ""||
      pharmacyCity.value == ""
    ) {
      alert("Please fill all the fields");
    } else {
      localStorage.setItem("pharmacyName", pharmacyName.value);
      localStorage.setItem("pharmacyEmail", pharmacyEmail.value);
      localStorage.setItem("pharmacyPhone", pharmacyPhone.value);
      localStorage.setItem("pharmacyPassword", pharmacyPassword.value);
      localStorage.setItem("pharmacyLocation", pharmacyLocation.value);
      localStorage.setItem("pharmacyGovernorate", pharmacyGovernorate.value);
      localStorage.setItem("pharmacyCity", pharmacyCity.value);     
    setTimeout(() => {
      window.location = "index.html";
    });
    }
});

// doctor
let doctorName = document.querySelector("#doctorName");
let doctorEmail = document.querySelector("#doctorEmail");
let doctorPhone = document.querySelector("#doctorPhone");
let doctorGovernorate = document.querySelector("#doctorGovernorate");
let doctorCity = document.querySelector("#doctorCity");
let doctorPassword = document.querySelector("#doctorPassword");
let doctorLocation = document.querySelector("#doctorLocation");
let signUpP = document.querySelector("#signUpP");
signUpPH.addEventListener("click", function(e) {
    e.preventDefault();
    if (
      doctorName.value == "" ||
      doctorEmail.value == "" ||
      doctorPhone.value == "" ||
      doctorLocation.value == "" ||
      doctorPassword.value == "" ||
      doctorGovernorate.value == ""||
      doctorCity.value == ""
    ) {
      alert("Please fill all the fields");
    } else {
      localStorage.setItem("doctorName", doctorName.value);
      localStorage.setItem("doctorEmail", doctorEmail.value);
      localStorage.setItem("doctorPhone", doctorPhone.value);
      localStorage.setItem("doctorPassword", doctorPassword.value);
      localStorage.setItem("doctorLocation", doctorLocation.value);
      localStorage.setItem("doctorGovernorate", doctorGovernorate.value);
      localStorage.setItem("doctorCity", doctorCity.value);     
    setTimeout(() => {
      window.location = "index.html";
    });
    }
});