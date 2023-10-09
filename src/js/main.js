import '../css/main.css';

// Sélectionnez les éléments du dropdown
const menuOpenButton = document.querySelector('.menu-open');
const menuCloseButton = document.querySelector('.menu-close');
const menuContent = document.querySelector('.menu-sm');

// Ajoutez un gestionnaire d'événement au bouton "menu-open" pour ouvrir le dropdown
menuOpenButton.addEventListener('click', () => {
    menuContent.classList.add('flex');
    menuContent.classList.remove('hidden');
    menuOpenButton.classList.add('hidden');
    menuCloseButton.classList.remove('hidden');
});

// Ajoutez un gestionnaire d'événement au bouton "menu-close" pour fermer le dropdown
menuCloseButton.addEventListener('click', () => {
    menuContent.classList.remove('flex');
    menuContent.classList.add('hidden');
    menuOpenButton.classList.remove('hidden');
    menuCloseButton.classList.add('hidden');
});
