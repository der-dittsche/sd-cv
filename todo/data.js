class Todos {
  constructor(status, desciption) {
    this.status = status;
    this.desciption = desciption;
  }
}

/* let request = new XMLHttpRequest();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  document.body.append(document.createTextNode(data.kraut));
});

request.open("GET", "https://krautipsum.com/api/kraut");

request.send(); */
function loadKraut() {
  fetch("https://krautipsum.com/api/kraut")
    .then((response) => response.json())

    .then((data) => {
      document.body.append(document.createTextNode(data.kraut));
    });
}

document.querySelector("button").addEventListener("click", loadKraut);
