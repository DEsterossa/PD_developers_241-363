const initApp = () => {
  const droparea = document.querySelector(".drop_area");

  const active = () => droparea.classList.add("green_border_dashed");

  const inactive = () => droparea.classList.remove("green_border_dashed");

  const prevents = (e) => e.preventDefault();

  ["dragenter", "dragover", "dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, prevents);
  });

  ["dragenter", "dragover"].forEach((evtName) => {
    droparea.addEventListener(evtName, active);
  });

  ["dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, inactive);
  });

  droparea.addEventListener("drop", handleDrop);
};

document.addEventListener("DOMContentLoaded", initApp);

const handleDrop = (e) => {
  const dt = e.dataTransfer;
  const files = dt.files;
  const fileArray = [...files];
  if (fileArray.length > 0) {
    document.getElementsByClassName("folder_pic")[0].style.display = "none";
    document.getElementsByClassName("text1")[0].style.display = "none";
    document.getElementsByClassName("text2")[0].style.display = "none";
    document.getElementsByClassName("file_added")[0].style.display = "block";
    document.querySelector(".drop_area").classList.add("green_border_solid");
    document.getElementById("drop_area1").setAttribute("disabled", true);
    document.getElementsByClassName("drop_area")[0].style.cursor = "default";
  }
};

const fileInput = document.getElementById("drop_area1");
fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    document.getElementsByClassName("folder_pic")[0].style.display = "none";
    document.getElementsByClassName("text1")[0].style.display = "none";
    document.getElementsByClassName("text2")[0].style.display = "none";
    document.getElementsByClassName("file_added")[0].style.display = "block";
    document.querySelector(".drop_area").classList.add("green_border_solid");
    fileInput.setAttribute("disabled", true);
    document.getElementsByClassName("drop_area")[0].style.cursor = "default";
  }
});
