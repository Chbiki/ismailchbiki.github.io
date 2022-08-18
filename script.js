// Service Worker FOR MOBILITY
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => console.log("service worker registered"))
    .catch((err) => console.log("service worker not registered", err));
}

// Website Theme
(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

//Show more or less text
const parentContainer = document.querySelector(".read-more-container");
parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("read-more-btn");
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("Read More")
    ? "Read Less . . ."
    : "Read More . . .";
});

/* --  Saving chosen theme to the local storage  -- */
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector(".theme-btn");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("light-mode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("light-mode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
