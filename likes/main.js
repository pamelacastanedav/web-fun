var count = 1;
var countElement = document.querySelector("#count");

function add1() {
  count++;
  countElement.innerText = count + " Like(s)";
  console.log(count);
}
