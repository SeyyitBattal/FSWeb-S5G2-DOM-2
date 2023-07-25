import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!", e);
});

const ustLinkler = document.querySelectorAll(".nav-link");
ustLinkler[0].style.color = "blue";
ustLinkler[1].style.fontWeight = "bold";
ustLinkler[2].style.border = "thick solid";
ustLinkler[3].style.textShadow = "5px 5px 1px #ff0000, 10px 10px 1px #0000ff";

ustLinkler[0].addEventListener("click", (event) => {
  console.log("Anasayfaya tıklandı!", event);
});

const otobus = document.querySelector(".intro img");
otobus.addEventListener("pointerover", function (event) {
  console.log("Pointer moved in", event);
});

document.body.addEventListener("keydown", (e) => {
  console.log("keydown event", e);
});

const gidelimFoto = document.querySelector(".img-content img");
gidelimFoto.addEventListener("WheelEvent", (e) => {
  e.style.color = "red";
});

window.addEventListener("load", (event) => {
  console.log("Page is fully loaded", event);
});
