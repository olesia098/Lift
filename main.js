let container = document.querySelector(".container");
let downBtn = document.querySelector("#down");
let upBtn = document.querySelector("#up");
let floor3 = document.querySelector("#floor3");
let goButton = document.getElementById("go-btn");
let buildingHeight = 3500;
let floorHeight = buildingHeight / 5;
let currentFloor = 1;

downBtn.addEventListener("click", () => {
  console.log(container.style.marginTop);
  if (container.style.marginTop === "") {
    container.style.marginTop = "510px";
  } else if (container.style.marginTop === "510px") {
    container.style.marginTop = "970px";
  } else if (container.style.marginTop === "970px") {
    container.style.marginTop = "1430px";
  } else if (container.style.marginTop === "1430px") {
    container.style.marginTop = "1890px";
  }
});

upBtn.addEventListener("click", () => {
  console.log(container.style.marginBottom);
  if (container.style.marginTop === "1890px") {
    container.style.marginTop = "1430px";
  } else if (container.style.marginTop === "1430px") {
    container.style.marginTop = "970px";
  } else if (container.style.marginTop === "970px") {
    container.style.marginTop = "510px";
  } else if (container.style.marginTop === "510px") {
    container.style.marginTop = "50px";
  }

});

function moveContainer(targetContainer) {
  let targetPosition = (targetContainer - 1) * floorHeight;
  container.style.transition = "bottom 2s";
  container.style.bottom = targetPosition + "px";
  currentContainer = targetContainer;
}
console.log(goButton);
goButton.addEventListener("click", () => {
  let inputFloor = prompt("Enter the desired floor (1 to 5):");
  let desiredFloor = parseInt(inputFloor);

  if (desiredFloor == 5) {
    container.style.marginTop = "50px";
  } else if (desiredFloor == 4) {
    container.style.marginTop = "510px";
  } else if (desiredFloor == 3) {
    container.style.marginTop = "970px";
  } else if (desiredFloor == 2) {
    container.style.marginTop = "1430px";
  } else if (desiredFloor == 1) {
    container.style.marginTop = "1890px";
  } else {
    alert("Нет такого этажа")
  }
});

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './img/elevator.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

function soundClick1() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './img/ding.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

function soundClick2() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './img/ding.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}