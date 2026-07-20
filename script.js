// ===== Navbar Scroll Effect =====
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Back to Top Button =====
var backBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    backBtn.classList.add('show');
  } else {
    backBtn.classList.remove('show');
  }
});

backBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Mobile Menu =====
var menuBtn = document.getElementById('mobileMenuBtn');
var mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobileMenu() {
  menuBtn.classList.remove('active');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// Close menu when clicking links
var mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(function(link) {
  link.addEventListener('click', closeMobileMenu);
});

// ===== Scroll Reveal Animation =====
function revealElements() {
  var elements = document.querySelectorAll('.anim-hidden');
  elements.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 80) {
      el.classList.add('anim-visible');
    }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      var offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Prevent navigation to Snappfood and show alert =====
// (function(){
//   var phone = '۰۹۱۴۹۸۸۹۸۰۵';
//   var message = 'در حال حاضر ثبت سفارش از طریق اسنپ‌فود فعال نیست.\nبرای ثبت سفارش لطفاً با شماره ' + phone + ' تماس بگیرید.\n(اسنپ‌فود در دست اقدام است و به زودی فعال میشود)';

//   var snappLinks = document.querySelectorAll('a[href*="snappfood"]');
//   snappLinks.forEach(function(link) {
//     // prevent any navigation (including middle-click / open in new tab) by removing href/target
//     try {
//       link.dataset._originalHref = link.href;
//       link.removeAttribute('href');
//       link.removeAttribute('target');
//     } catch (e) {
//       // ignore
//     }

//     link.addEventListener('click', function(e) {
//       e.preventDefault();
//       e.stopPropagation();
//       alert(message);
//     });

//     // also prevent keyboard activation
//     link.addEventListener('keydown', function(e) {
//       if (e.key === 'Enter' || e.key === ' ') {
//         e.preventDefault();
//         alert(message);
//       }
//     });
//   });
// })();

// ===== FAQ Accordion =====
(function() {
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function(button) {
    button.addEventListener('click', function() {
      // Close all other items
      faqQuestions.forEach(function(otherButton) {
        if (otherButton !== button) {
          otherButton.classList.remove('active');
        }
      });

      // Toggle current item
      button.classList.toggle('active');
    });
  });
})();
