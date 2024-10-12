const items = document.querySelectorAll(".carousel-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentIndex = 0;
let inactivityTimeout;

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

// مخفی‌سازی دکمه‌ها
function hideButtons() {
  nextButton.classList.add("hidden");
  prevButton.classList.add("hidden");
}

// نمایش دکمه‌ها و بازنشانی تایمر
function resetInactivityTimer() {
  nextButton.classList.remove("hidden");
  prevButton.classList.remove("hidden");
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(hideButtons, 3000); // مخفی کردن بعد از 3 ثانیه عدم فعالیت
}

// افزودن رویدادهای کلیک برای دکمه‌ها
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
  resetInactivityTimer();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
  resetInactivityTimer();
});

// رویداد برای حرکت ماوس
document.addEventListener("mousemove", resetInactivityTimer);

// رویداد برای لمس صفحه در موبایل
document.addEventListener("touchstart", resetInactivityTimer);

// نمایش آیتم اول هنگام بارگذاری صفحه
showItem(currentIndex);

// شروع تایمر برای مخفی کردن دکمه‌ها
inactivityTimeout = setTimeout(hideButtons, 3000); // دکمه‌ها پس از 3 ثانیه عدم فعالیت محو می‌شوند

const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
let startX, endX;

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
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// رویداد لمسی برای پایان Swipe و تشخیص حرکت
document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  // تشخیص جهت حرکت
  if (startX - endX > 50) {
    goToNext(); // حرکت به سمت چپ (اسلاید بعدی)
  } else if (endX - startX > 50) {
    goToPrev(); // حرکت به سمت راست (اسلاید قبلی)
  }
});

// نمایش آیتم اول هنگام بارگذاری صفحه
showItem(currentIndex);
