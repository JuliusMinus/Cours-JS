//selecteur

//Click event

const questionContainer = document.querySelector(".click-event-box");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//----------------------------------------------

//Mouse Events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//------------------------------------------

//keyPress Event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Rest.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);
});

//-----------------------------

//scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------------------------------

// form events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let langage = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  langage = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${langage}</h4>
    `;
  } else {
    alert("veuillez accepter les CGV");
  }
});

//---------------------------------------

//load event

window.addEventListener("load", () => {
  console.log("document chargé");
});

// -----------------------------------------------
// for each

const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//-------------------------------------------

// Usecapture

document.body.addEventListener(
  "click",
  () => {
    console.log("click 2");
  },
  true
);

//de base addeventlistener lit les événement de haut en bas,
//avec usecapture et l'ajout d'un troisième paramètre true( par défaut c'est false),
// vous inversez l'ordre de traitement des évenements et rendez prioritaire le Usecapture

//-----------------------------------------------------

// Stop propagation

questionContainer.addEventListener("click", (e) => {
  alert("test");
  e.stopPropagation();
});

//--------------------------------------

//removeEventListener

//-------------------------------------------

// BOM (browser object Model)

// éléments adossés à Window--Examples

// window.innerheight, .window.scrollY, window.open(http://............),
// window.close(), window.alert

// autres exemples

btn2.addEventListener("click", () => {
  confirm("voulez-vous vraiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("entrez votre nom");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

// setTimeOut

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

let interval = setInterval(() => {
  document.body.innerHTML += `
  <div class='box'>
  <h2>Nouvelle boite</h2>
  </div>
  `;
}, 5000);

// pour le stopper

document.body.addEventListener("click", () => {
  clearInterval(interval);
});

// suupprimer un élément du dom

document.body.addEventListener("click", (e) => {
  e.target.remove();
});

// Location
