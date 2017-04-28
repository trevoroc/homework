// function hammerTime() {
//   alert("HAMMERTIME");
// }
//
// window.setTimeout(hammerTime, 5000);
//

function hammerTime(time) {

  function hammerAlert() {
    alert(`${time} is hammertime!`);
  }

  window.setTimeout(hammerAlert, 5000);
}
