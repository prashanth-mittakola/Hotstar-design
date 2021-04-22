console.log("Hi");
const arrows = document.querySelectorAll("i.arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const movieItemsLength = movieList[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    clickCounter++;
    let valueOfX = movieList[i].computedStyleMap().get("transform")[0].x.value;
    if (movieItemsLength - (5 + clickCounter) >= 0) {
      movieList[i].style.transform = `translateX(${valueOfX - 290}px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// For White Theme
const toggleBall = document.querySelector(".toggle");
const toToggleItems = document.querySelectorAll(
  ".toggle, .toggle-ball, h2, .sidebar, .navbar-container, .container"
);
toggleBall.addEventListener("click", () => {
  toToggleItems.forEach((item) => {
    item.classList.toggle("active");
  });
});
