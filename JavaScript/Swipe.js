const items = document.querySelectorAll(".carousel-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentIndex = 0;

// تابع نمایش آیتم‌های فعال
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

// جابجایی به اسلاید بعدی
function goToNext() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}

// جابجایی به اسلاید قبلی
function goToPrev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
}

// رویداد لمسی برای شروع Swipe
let startX, endX;

// ثبت نقطه شروع لمسی
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// ثبت نقطه پایان لمسی و تشخیص حرکت
document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  // تشخیص جهت حرکت
  if (startX - endX > 50) {
    goToNext(); // حرکت به سمت چپ (اسلاید بعدی)
  } else if (endX - startX > 50) {
    goToPrev(); // حرکت به سمت راست (اسلاید قبلی)
  }
});

// افزودن رویدادهای کلیک برای دکمه‌ها
nextButton.addEventListener("click", goToNext);
prevButton.addEventListener("click", goToPrev);

// نمایش آیتم اول هنگام بارگذاری صفحه
showItem(currentIndex);
