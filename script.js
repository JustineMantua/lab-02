function letsTalk() {
            alert('Thanks for your interest! Let\'s connect and talk about collaborating together.');
        }

function sendContact(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim() || 'Contact from website';
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in your name, email, and a message.');
        return;
    }

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:calamba.isaiah@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailto;
}

// set copyright year in footer
(function setFooterYear(){
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Toggle header background when scrolling past hero
(function headerScrollHandler(){
  const header = document.querySelector('header');
  const hero = document.getElementById('home');
  if (!header) return;

  function updateHeader() {
    const threshold = hero ? (hero.offsetHeight - header.offsetHeight) : 60;
    if (window.scrollY > threshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // run once on load
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
})();

