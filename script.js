// MENU BURGER

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {

    burger.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


// FILTRES MENUS

const btnFiltre = document.getElementById("btn-filtre");

const filtreTheme = document.getElementById("filtre-theme");

const filtrePrix = document.getElementById("filtre-prix");

const filtrePersonnes = document.getElementById("filtre-nb-personnes");

const filtreAllergene = document.getElementById("filtre-alergenes");

const menus = document.querySelectorAll(".menu-card");

if (btnFiltre) {

    btnFiltre.addEventListener("click", () => {

        const theme = filtreTheme.value;

        const prix = filtrePrix.value;

        const personnes = filtrePersonnes.value;

        const allergene = filtreAllergene.value;

        menus.forEach(menu => {

            const menuTheme = menu.dataset.theme;

            const menuPrix = menu.dataset.price;

            const menuPersonnes = menu.dataset.personnes;

            const menuAllergene = menu.dataset.allergene;

            let afficher = true;

            // FILTRE THEME

            if (theme !== "all" && menuTheme !== theme) {

                afficher = false;

            }

            // FILTRE PRIX

            if (prix !== "all" && Number(menuPrix) > Number(prix)) {

                afficher = false;

            }

            // FILTRE PERSONNES

            if (
                personnes !== "all" &&
                Number(menuPersonnes) < Number(personnes)
            ) {

                afficher = false;

            }

            // FILTRE ALLERGENE

            if (
                allergene !== "all" &&
                menuAllergene !== allergene
            ) {

                afficher = false;

            }

            // AFFICHAGE

            if (afficher) {

                menu.style.display = "block";

            } else {

                menu.style.display = "none";

            }

        });

    });

}


// VALIDATION FORMULAIRE INSCRIPTION

const formInscription =
document.getElementById("form-inscription");

if (formInscription) {

    formInscription.addEventListener("submit", (e) => {

        e.preventDefault();

        // RECUPERATION DES VALEURS

        const nom =
        document.getElementById("nom").value;

        const prenom =
        document.getElementById("prenom").value;

        const telephone =
        document.getElementById("telephone").value;

        const adresse =
        document.getElementById("adresse").value;

        const adresseMail =
        document.getElementById("adresseMail").value;

        const motDePasse =
        document.getElementById("motDePasse").value;

        const confirmerMotDePasse =
        document.getElementById("confirmerMotDePasse").value;

        // REGEX MOT DE PASSE

        const regexPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/;

        // CHAMPS VIDES

        if (
            nom === "" ||
            prenom === "" ||
            telephone === "" ||
            adresse === "" ||
            adresseMail === "" ||
            motDePasse === "" ||
            confirmerMotDePasse === ""
        ) {

            alert("Veuillez remplir tous les champs");

            return;

        }

        // MOTS DE PASSE DIFFERENTS

        if (motDePasse !== confirmerMotDePasse) {

            alert("Les mots de passe ne correspondent pas");

            return;

        }

        // MOT DE PASSE SECURISE

        if (!regexPassword.test(motDePasse)) {

            alert(
                "Le mot de passe doit contenir au minimum 10 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
            );

            return;

        }

        alert("Inscription réussie 🎉");

    });

}

// VALIDATION FORMULAIRE CONNEXION

const formConnexion =
document.getElementById("form-connexion");

if (formConnexion) {

    formConnexion.addEventListener("submit", (e) => {

        e.preventDefault();

        // RECUPERATION DES VALEURS

        const emailConnexion =
        document.getElementById("emailConnexion").value;

        const motDePasseConnexion =
        document.getElementById("motDePasseConnexion").value;

        // CHAMPS VIDES

        if (
            emailConnexion === "" ||
            motDePasseConnexion === ""
        ) {

            alert("Veuillez remplir tous les champs");

            return;

        }

        alert("Connexion réussie 🎉");

         localStorage.setItem("connecte", "true");

         window.location.href = "index.html";
    });

    

}

// GESTION CONNEXION / DECONNEXION

const btnConnexion =
document.getElementById("btn-connexion");

if (btnConnexion) {

    // UTILISATEUR CONNECTE

    if (localStorage.getItem("connecte") === "true") {

        btnConnexion.textContent = "Déconnexion";

        btnConnexion.href = "#";

        btnConnexion.addEventListener("click", () => {

            localStorage.removeItem("connecte");

            window.location.reload();

        });

    }

}

