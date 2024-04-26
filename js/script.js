let registerbtn = document.querySelector("#registerbtn");
let userinfo = document.querySelector("#userinfo");
let username = document.querySelector("#username");

if (localStorage.getItem("patientName")) {
  registerbtn.remove();
  userinfo.style.display = "block";
  username.innerHTML =
      `<i class="fa fa-user-circle-o" aria-hidden="true" style="font-size:20px;color: rgb(18, 61, 121);"></i>&nbsp` + localStorage.getItem("patientName");
} else {
  if (localStorage.getItem("pharmacyName")) {
    registerbtn.remove();
    userinfo.style.display = "block";
    username.innerHTML =
    `<i class="fa fa-user-circle-o" aria-hidden="true" style="font-size:20px;color: rgb(18, 61, 121);"></i>&nbsp` +
      localStorage.getItem("pharmacyName");
  } else if (localStorage.getItem("doctorName")) {
    registerbtn.remove();
    userinfo.style.display = "block";
    username.innerHTML =
      `<i class="fa fa-user-circle-o" aria-hidden="true" style="font-size:20px;color: rgb(18, 61, 121);"></i>&nbsp` +
      localStorage.getItem("doctorName");
  }
}
