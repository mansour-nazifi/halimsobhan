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
