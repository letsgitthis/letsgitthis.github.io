var themeSwitcher = document.querySelector("#theme-switcher");
var body = document.querySelector("body");
var mode = "dark";

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    body.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    body.setAttribute("class", "dark");
  }
});