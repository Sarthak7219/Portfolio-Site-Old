const themeBox = document.querySelector(".theme-box");
const toggleIcon = document.querySelector("#toggle-button");
const themeColor = document.querySelectorAll(".color");
let color = document.querySelector(".colorLink");
const main = document.querySelector(".main");
const moon = document.querySelector("#darkT");
const navToggler = document.querySelector(".nav-toggler");
const leftbar = document.querySelector(".leftbar");

toggleIcon.addEventListener("click", () => {
  themeBox.classList.toggle("open");
});
moon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  moon.classList.toggle("fa-moon");
  moon.classList.toggle("fa-sun");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    moon.classList.add("fa-moon");
  } else {
    moon.classList.add("fa-sun");
  }
});
window.addEventListener("scroll", () => {
  if (themeBox.classList.contains("open")) {
    themeBox.classList.remove("open");
  }
});

const themeChanger = (colorId) => {
  color.setAttribute("href", `color${colorId}.css`);
};
const ul = document.querySelector(".ull");
listItems = ul.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
  const a = listItems[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < listItems.length; j++) {
      allSections[j].classList.remove("back-section");
      if (allSections[j].classList.contains("active")) {
        allSections[j].classList.add("back-section");
      }
      listItems[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}
allSections = document.querySelectorAll("section");
function showSection(element) {
  const href = element.getAttribute("href").split("#")[1];
  for (let i = 0; i < allSections.length; i++) {
    allSections[i].classList.remove("active");
  }
  document.querySelector(`#${href}`).classList.add("active");
}
navToggler.addEventListener("click", () => {
  leftbar.classList.toggle("open");
  console.log("hi");
});

// Define an array to hold the state for each slider
const sliders = [
  { containerId: "slider1", currentIndex: 0 },
  { containerId: "slider2", currentIndex: 0 },
  { containerId: "slider3", currentIndex: 0 },
];

function showSlide(index, containerId) {
  const slides = document.querySelectorAll(`#${containerId} .slide`);
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function prevSlide(containerId) {
  const slider = sliders.find((s) => s.containerId === containerId);
  slider.currentIndex = (slider.currentIndex - 1 + 2) % 2;
  showSlide(slider.currentIndex, containerId);
}

function nextSlide(containerId) {
  const slider = sliders.find((s) => s.containerId === containerId);
  slider.currentIndex = (slider.currentIndex + 1) % 2;
  showSlide(slider.currentIndex, containerId);
}
