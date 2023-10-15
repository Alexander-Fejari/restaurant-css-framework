import "../css/main.css";

//NAVBAR
// Sélectionnez les éléments du dropdown
const menuOpenButton = document.querySelector(".menu-open");
const menuCloseButton = document.querySelector(".menu-close");
const menuContent = document.querySelector(".menu-sm");

// Ajoutez un gestionnaire d'événement au bouton "menu-open" pour ouvrir le dropdown
menuOpenButton.addEventListener("click", () => {
  menuContent.classList.add("flex");
  menuContent.classList.remove("hidden");
  menuOpenButton.classList.add("hidden");
  menuCloseButton.classList.remove("hidden");
});

// Ajoutez un gestionnaire d'événement au bouton "menu-close" pour fermer le dropdown
menuCloseButton.addEventListener("click", () => {
  menuContent.classList.remove("flex");
  menuContent.classList.add("hidden");
  menuOpenButton.classList.remove("hidden");
  menuCloseButton.classList.add("hidden");
});

//GALLERY

// Obtenez les éléments de la galerie
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// Obtenez les boutons de pagination
const boutonsPagination = document.querySelectorAll("#pagination a");

// Ajoutez des écouteurs de clic à chaque bouton de pagination
boutonsPagination.forEach((bouton, index) => {
  bouton.addEventListener("click", (e) => {
    e.preventDefault(); // Empêchez le lien de naviguer

    console.log(index, " I was clicked");
    // Changez la source des images en fonction du bouton cliqué
    switch (index) {
      case 0:
        page1.querySelector("img").src = "./src/img/gallery/hamburger.jpg";
        page2.querySelector("img").src = "./src/img/gallery/hotdog-multi.jpg";
        page3.querySelector("img").src =
          "./src/img/gallery/hamburger-cheese.jpg";
        break;
      case 1:
        page1.querySelector("img").src = "./src/img/gallery/frites-sel.jpg";
        page2.querySelector("img").src =
          "./src/img/gallery/frites-sel-prep.jpg";
        page3.querySelector("img").src = "./src/img/gallery/hotdog2.jpg";
        break;
      case 2:
        page1.querySelector("img").src =
          "./src/img/gallery/sign-good-burger.jpg";
        page2.querySelector("img").src = "./src/img/gallery/sign-restrooms.jpg";
        page3.querySelector("img").src =
          "./src/img/gallery/burger-and-fries.jpg";
        break;
      case 3:
        page1.querySelector("img").src = "./src/img/gallery/fries-paprika.jpg";
        page2.querySelector("img").src = "./src/img/gallery/hamburger-expo.jpg";
        page3.querySelector("img").src = "./src/img/gallery/hotdog-fancy.jpg";
        break;
      default:
        break;
    }
  });
});
