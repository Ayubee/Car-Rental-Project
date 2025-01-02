const themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.getElementById("container__box__image").src =
    document.body.classList.contains("dark-mode")
      ? "./src/images/sun.svg"
      : "./src/images/moon.svg";

  document.getElementById("brands__nissan").src =
    document.body.classList.contains("dark-mode")
      ? "./src/images/nissan-white.png"
      : "./src/images/nissan-black.png";

  document.getElementById("brands__toyota").src =
    document.body.classList.contains("dark-mode")
      ? "./src/images/toyota-white.png"
      : "./src/images/toyota.png";

  document.getElementById("brands__dodge").src =
    document.body.classList.contains("dark-mode")
      ? "./src/images/dodge-white.png"
      : "./src/images/dodge.png";

  document.getElementById("brands__hyundai").src =
    document.body.classList.contains("dark-mode")
      ? "./src/images/hyundai-white.png"
      : "./src/images/hyundai.png";

  document.getElementById("brands__jeep").src =
    document.body.classList.contains("dark-mode")
      ? "./src/images/jeep-white.png"
      : "./src/images/jeep.png";
});
