const google = require("./google.png");

function addImage() {
  const img = document.createElement("img");
  img.width = "300";
  img.alt = "google image";
  img.src = google;

  const body = document.querySelector("body");
  body.appendChild(img);
}

module.exports = {
  addImage,
};
