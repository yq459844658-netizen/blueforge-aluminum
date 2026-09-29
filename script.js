const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formNote = document.querySelector('#formNote');
    formNote.textContent = 'Thanks for reaching out. This demo form is ready to connect to your inbox.';
    formNote.classList.add('success-note');
    contactForm.reset();
  });
}
