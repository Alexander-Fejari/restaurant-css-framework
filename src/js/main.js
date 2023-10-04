import '../css/main.css';

// toggle menu mobile
const mobileMenu = document.querySelector('nav ul');
const toggleButton = document.querySelector('button');

toggleButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('block')) {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
    } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
    }
});
