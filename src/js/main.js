import '../css/main.css'

import fritesPaprika from '../img/gallery/frites-paprika.jpg'
import fritesSel from '../img/gallery/frites-sel.jpg'
import fritesSelPrep from '../img/gallery/frites-sel-prep.jpg'
import hamburger from '../img/gallery/hamburger.jpg'
import hamburgerCheese from '../img/gallery/hamburger-cheese.jpg'
import hamburgerExpo from '../img/gallery/hamburger-expo.jpg'
import hotdogMulti from '../img/gallery/hotdog-multi.jpg'
import hotdogExpo from '../img/gallery/hotdog-expo.jpg'
import hotdogFancy from '../img/gallery/hotdog-fancy.jpg'
import signGoodBurger from '../img/gallery/sign-good-burger.jpg'
import signRestrooms from '../img/gallery/sign-restrooms.jpg'
import hamburgerAndFries from '../img/gallery/hamburger-and-fries.jpg'

// [TODO]:
// - [ ] Le contenu menuOpenButton et menuCloseButton est le meme, donc tu peux le mettre dans une fonction et l'appeler deux fois ?

//NAVBAR
// Sélectionnez les éléments du dropdown
const menuOpenButton = document.querySelector('.menu-open')
const menuCloseButton = document.querySelector('.menu-close')
const menuContent = document.querySelector('.menu-sm')

// Ajoutez un gestionnaire d'événement au bouton "menu-open" pour ouvrir le dropdown
menuOpenButton.addEventListener('click', () => {
    menuContent.classList.add('flex')
    menuContent.classList.remove('hidden')
    menuOpenButton.classList.add('hidden')
    menuCloseButton.classList.remove('hidden')
})

// Ajoutez un gestionnaire d'événement au bouton "menu-close" pour fermer le dropdown
menuCloseButton.addEventListener('click', () => {
    menuContent.classList.remove('flex')
    menuContent.classList.add('hidden')
    menuOpenButton.classList.remove('hidden')
    menuCloseButton.classList.add('hidden')
})

//GALLERY

// Obtenez les éléments de la galerie
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const page3 = document.getElementById('page3')

// Obtenez les boutons de pagination
const boutonsPagination = document.querySelectorAll('#pagination a')

// Ajoutez des écouteurs de clic à chaque bouton de pagination
boutonsPagination.forEach((bouton, index) => {
    bouton.addEventListener('click', (e) => {
        e.preventDefault() // Empêchez le lien de naviguer

        // Changez la source des images en fonction du bouton cliqué
        switch (index) {
            case 0:
                page1.querySelector('img').src = hamburger
                page2.querySelector('img').src = hotdogMulti
                page3.querySelector('img').src = hamburgerCheese
                break
            case 1:
                page1.querySelector('img').src = fritesSel
                page2.querySelector('img').src = fritesSelPrep
                page3.querySelector('img').src = hotdogExpo
                break
            case 2:
                page1.querySelector('img').src = signGoodBurger
                page2.querySelector('img').src = signRestrooms
                page3.querySelector('img').src = hamburgerAndFries
                break
            case 3:
                page1.querySelector('img').src = fritesPaprika
                page2.querySelector('img').src = hamburgerExpo
                page3.querySelector('img').src = hotdogFancy
                break
            default:
                break
        }
    })
})
