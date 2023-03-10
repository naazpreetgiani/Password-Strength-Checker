//Program Title
document.getElementById("check-btn").addEventListener("click", btnClicked);
outputE1 = document.getElementById("pass-info");

function btnClicked() {
  //INPUT
  let pass = document.getElementById("check-in").value;
  //PROCESS
  if (pass.length >= 13) {
    outputE1.innerHTML = `<h2 class="strength">Very Strong</h2>`;
  } else if (pass.length <= 12 && pass.length >= 9) {
    outputE1.innerHTML = `<h2 class="strength">Strong</h2>`;
  } else if (pass.length <= 8 && pass.length >= 5) {
    outputE1.innerHTML = `<h2 class="strength">Okay</h2>`;
  } else if (pass.length <= 4 && pass.length >= 1) {
    outputE1.innerHTML = `<h2 class="strength">Weak</h2>`;
  } else {
    outputE1.innerHTML = `<h2 class="strength">Please provide a password.</h2>`;
  }
  //OUTPUT
}
