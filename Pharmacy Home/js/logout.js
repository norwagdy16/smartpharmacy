// Wait for the DOM content to be loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the logout button by its ID
  let logoutButton = document.querySelector("#logout");

  // Add event listener to the logout button
  logoutButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Clear the stored user credentials from localStorage
    localStorage.clear();
    // localStorage.clear("patientPassword");
    // localStorage.clear("pharmacyName");
    // localStorage.clear("pharmacyPassword");

    // Redirect the user to the login page
    window.location = "index.html"; // Change "login.html" to the appropriate login page URL
  });
});
