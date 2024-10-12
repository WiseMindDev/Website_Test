const items = document.querySelectorAll(".carousel-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove("active", "next", "prev");
    if (i === index) {
      item.classList.add("active");
    } else if (i === (index - 1 + items.length) % items.length) {
      item.classList.add("prev");
    } else if (i === (index + 1) % items.length) {
      item.classList.add("next");
    }
  });
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

// نمایش آیتم اول هنگام بارگذاری صفحه
showItem(currentIndex);
