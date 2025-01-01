const themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.getElementById("container__box__image").src =
    document.body.classList.contains("dark-mode")
      ? "./src/images/sun.svg"
      : "./src/images/moon.svg";
});
