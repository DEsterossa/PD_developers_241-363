const ovzRadio = document.getElementsByClassName("ovz_button")[0];
const voluenteerRadio = document.getElementsByClassName("volunteer_button")[0];

document.getElementsByClassName("next_button")[0].onclick = function (event) {
  if (ovzRadio.checked || voluenteerRadio.checked) {
    if (ovzRadio.checked) {
      window.location.href = "../pages/ovz_reg1.html";
    } else if (voluenteerRadio.checked) {
      window.location.href = "../pages/volunteer_reg.html";
    }
  }
};
