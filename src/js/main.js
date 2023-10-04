import '../css/main.css';

const toggleButton = document.querySelector('button');
const menuMobile = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    const menuOpenIcon = toggleButton.querySelector('.menu-open');
    const menuCloseIcon = toggleButton.querySelector('.menu-close');

    if (menuOpenIcon.classList.contains('hidden')) {
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
        menuMobile.classList.add('hidden');
        menuMobile.classList.remove('flex');
    } else {
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('flex');
    }
});
