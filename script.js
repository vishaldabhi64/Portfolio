/* ================= HEADER ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



/* ================= MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navOverlay = document.getElementById("navOverlay");
const navLinks = document.querySelectorAll(".nav-menu li");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  navOverlay.classList.toggle("active");

  // Body scroll lock
  document.body.classList.toggle("no-scroll");
}

// Click on hamburger
menuBtn.addEventListener("click", toggleMenu);

// Close when clicking menu item
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// Close function
function closeMenu() {
  menuBtn.classList.remove("active");
  navOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

/* ================= service section ================= */



const swiper = new Swiper(".servicesSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  centeredSlides: false,
  slidesPerGroup: 1,      // Important
  watchOverflow: true,
  resistanceRatio: 0,     // Important (stop elastic pull)
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    801: {
      slidesPerView: 3,
    }
  }
});

/* ================= FAQ ================= */


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // Close others
    faqItems.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});


