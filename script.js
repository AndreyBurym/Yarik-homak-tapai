let tapCount = 0;

window.onload = () => {
  const savedTapCount = localStorage.getItem("tapCount");
  if (savedTapCount !== null) {
    tapCount = parseInt(savedTapCount, 10);
  }
  positionCircleRandomly();
  showStartupModal();
};

document.getElementById("circle").addEventListener("click", () => {
  tapCount++;
  showPlusOne();
  triggerShrinkAnimation();
  positionCircleRandomly();
});

document.getElementById("showTapsButton").addEventListener("click", () => {
  showModal(`You have tapped the circle ${tapCount} times.`);
});

document.getElementById("saveProgressButton").addEventListener("click", () => {
  localStorage.setItem("tapCount", tapCount);
  showModal("Progress saved!");
});

document.getElementById("resetProgressButton").addEventListener("click", () => {
  tapCount = 0;
  localStorage.removeItem("tapCount");
  showModal("Progress reset!");
});

document.getElementById("closeButton").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});

function showModal(message) {
  document.getElementById("modalText").innerText = message;
  document.getElementById("modal").style.display = "flex";
}

function showPlusOne() {
  const body = document.body;
  const plusOne = document.createElement("div");
  plusOne.className = "plus-one";
  plusOne.textContent = "+1";

  const randomX = Math.random() * (window.innerWidth - 50);
  const randomY = Math.random() * (window.innerHeight - 50);

  plusOne.style.left = `${randomX}px`;
  plusOne.style.top = `${randomY}px`;

  body.appendChild(plusOne);

  setTimeout(() => {
    body.removeChild(plusOne);
  }, 2000);
}

function triggerShrinkAnimation() {
  const circle = document.getElementById("circle");
  circle.classList.add("shrink");

  setTimeout(() => {
    circle.classList.remove("shrink");
  }, 200);
}

function positionCircleRandomly() {
  const circle = document.getElementById("circle");
  const mainContent = document.querySelector(".main-content");

  const circleDiameter = circle.offsetWidth;
  const mainContentWidth = mainContent.clientWidth;
  const mainContentHeight = mainContent.clientHeight;

  const randomX = Math.random() * (mainContentWidth - circleDiameter);
  const randomY = Math.random() * (mainContentHeight - circleDiameter);

  circle.style.left = `${randomX}px`;
  circle.style.top = `${randomY}px`;
}

function showStartupModal() {
  const startupModal = document.getElementById("startupModal");
  startupModal.style.display = "flex";
  setTimeout(() => {
    startupModal.style.display = "none";
  }, 5000);
}
