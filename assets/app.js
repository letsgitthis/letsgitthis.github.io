var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".body-container");
var mode = "dark";

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});