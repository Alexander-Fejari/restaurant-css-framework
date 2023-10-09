import '../css/main.css';

//NAVBAR
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

//GALLERY

// Obtenez les éléments de la galerie
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

// Obtenez les boutons de pagination
const boutonsPagination = document.querySelectorAll('#pagination a');

// Ajoutez des écouteurs de clic à chaque bouton de pagination
boutonsPagination.forEach((bouton, index) => {
    bouton.addEventListener('click', (e) => {
        e.preventDefault(); // Empêchez le lien de naviguer

        // Changez la source des images en fonction du bouton cliqué
        switch (index) {
            case 0:
                item1.querySelector('img').src = './src/img/gallery/img%20(1).jpg';
                item2.querySelector('img').src = './src/img/gallery/img%20(2).jpg';
                item3.querySelector('img').src = './src/img/gallery/img%20(3).jpg';
                break;
            case 1:
                item1.querySelector('img').src = './src/img/gallery/img%20(4).jpg';
                item2.querySelector('img').src = './src/img/gallery/img%20(5).jpg';
                item3.querySelector('img').src = './src/img/gallery/img%20(6).jpg';
                break;
            case 2:
                item1.querySelector('img').src = './src/img/gallery/img%20(7).jpg';
                item2.querySelector('img').src = './src/img/gallery/img%20(8).jpg';
                item3.querySelector('img').src = './src/img/gallery/img%20(9).jpg';
                break;
            case 3:
                item1.querySelector('img').src = './src/img/gallery/img%20(10).jpg';
                item2.querySelector('img').src = './src/img/gallery/img%20(11).jpg';
                item3.querySelector('img').src = './src/img/gallery/img%20(12).jpg';
                break;
            default:
                break;
        }
    });
});
