var nameEl = document.getElementById("name");
var age = document.getElementById("age");
var color = document.getElementById("colors");

var radioButton = document.querySelectorAll('input[type="radio"]');
var btn = document.getElementById("btn");
var selectedRadioButton;

/************************************************** */
//   second page
/*************************************************** */

function checkGender() {
  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      selectedRadioButton = radioButton[i].value;
      break;
    }
  }
}
// Helper methods
var myDate = new Date();
myDate.setDate(myDate.getDate() + 3);
function getCookie(cookieName) {
  var cookieIndex = document.cookie?.split(";");

  var newCookie;
  cookieIndex.forEach((element) => {
    if (element.trim().startsWith(cookieName + "=")) newCookie = element.trim();
  });

  if (cookieIndex !== undefined && newCookie !== undefined) {
    return newCookie.substring(cookieName.length + 1);
  }
  return "";
}
function setCookie(key, value) {
  document.cookie = key + "=" + value + ";expires=" + myDate;
}
function deleteCookie(key) {
  var date = new Date();
  date.setDate(myDate.getDate() - 2);

  document.cookie = key + "=fgf;expires=" + date;
}
function allCookie() {
  return document.cookie.split(";");
}
function hasCookie(cookieName) {
  if (getCookie(cookieName)) return true;

  return false;
}

function checkNewPage() {
  //userName.innerHTML = `${getCookie("name")}`;
}

var myWin;
btn.addEventListener("click", function () {
  checkGender();

  setCookie("name", nameEl.value);
  setCookie("age", age.value);
  setCookie("gender", selectedRadioButton);
  setCookie("color", color.value);
  setCookie("time", 1);

  myWin = window.open("./login.html", "_self", "");
});
