var countOne = 0;
var countTwo = 0;

function clickFunction(element) {
  alert("Ninja was liked");
  if (element.name === "button-one") {
    countOne++;
    element.innerText = "Likes " + countOne;
  } else {
    countTwo++;
    element.innerText = "Likes " + countTwo;
  }
}

function logOut(element) {
  if (element.innerText === "Log In") {
    element.innerText = "Log Out";
  } else {
    element.innerText = "Log In";
  }
}

function remove(element) {
  element.remove();
}
