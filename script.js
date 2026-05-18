


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

        // ENVOI DES DONNEES AU BACKEND

fetch("https://vite-gourmand-api-kgvk.onrender.com/inscription", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        nom,
        prenom,
        telephone,
        adresse,
        adresseMail,
        motDePasse

    })

})

.then(response => response.json())

.then(data => {

    alert(data.message);

})

.catch(error => {

    console.log(error);

});

    });

}

// VALIDATION FORMULAIRE CONNEXION

const formConnexion =
document.getElementById("form-connexion");

if (formConnexion) {

    formConnexion.addEventListener(
        "submit",
        async (e) => {

            e.preventDefault();

            const adresseMail =
            document.getElementById(
                "emailConnexion"
            ).value;

            const motDePasse =
            document.getElementById(
                "motDePasseConnexion"
            ).value;

            // CHAMPS VIDES

            if (
                adresseMail === "" ||
                motDePasse === ""
            ) {

                alert(
                    "Veuillez remplir tous les champs"
                );

                return;

            }

            try {

                const reponse =
                await fetch(

                    "https://vite-gourmand-api-kgvk.onrender.com/connexion",

                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                            "application/json"

                        },

                        body: JSON.stringify({

                            adresseMail,
                            motDePasse

                        })

                    }

                );

                const data =
                await reponse.json();

                console.log(data);

                alert(data.message);

                // CONNEXION OK

                if (reponse.ok) {

                    localStorage.setItem(
                        "connecte",
                        "true"
                    );

                    localStorage.setItem(
                        "adresseMail",
                        adresseMail
                    );

                    localStorage.setItem(
                        "role",
                        data.role
                    );

                    // EMPLOYE

                    if (
                        data.role === "employe"
                    ) {

                        window.location.href =
                        "employe.html";

                    }

                    // CLIENT

                    else {

                        window.location.href =
                        "index.html";

                    }

                }

            }

            catch (error) {

                console.log(error);

            }

        }

    );

}

            


 const connexionClient =
document.getElementById("connexion-client");

const espaceClient =
document.getElementById("espace-client");

const deconnexionClient =
document.getElementById("deconnexion-client");

const espaceEmploye =
document.getElementById("espace-employe");

const espaceAdmin =
document.getElementById(
    "espace-admin"
);


// UTILISATEUR CONNECTE

if (localStorage.getItem("connecte") === "true") {

    // CACHE CONNEXION

    connexionClient.style.display =
    "none";

    // AFFICHE ESPACE

    espaceClient.style.display =
    "block";

    // AFFICHE DECONNEXION

    deconnexionClient.style.display =
    "block";

    // EMPLOYE

if (
    localStorage.getItem("role")
    === "employe"
) {

    espaceEmploye.style.display =
    "block";

}

// ADMIN

if (
    localStorage.getItem("role")
    === "admin"
) {

    espaceAdmin.style.display =
    "block";

}

}


// DECONNEXION

const btnDeconnexion =
document.getElementById(
    "btn-deconnexion"
);

if (btnDeconnexion) {

    btnDeconnexion.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "connecte"
            );

            localStorage.removeItem(
                "adresseMail"
            );

            localStorage.removeItem(
                "role"
            );

            window.location.href =
            "connexion.html";

        }

    );

}

    


// page commande menu


const menuChoisi =
document.getElementById("menuChoisi");

if (menuChoisi) {

    const params =
    new URLSearchParams(window.location.search);

    const menu =
    params.get("menu");

    menuChoisi.textContent =
    `Menu sélectionné : ${menu}`;

}

// FORMULAIRE COMMANDE

const formCommande =
document.getElementById("formCommande");

if (formCommande) {

formCommande.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nom =
    document.getElementById("nomCommande").value;

    const adresseMail =
    document.getElementById("emailCommande").value;

    const nombrePersonnes =
    document.getElementById("nombrePersonnes").value;

    const dateReservation =
    document.getElementById("dateCommande").value;

    const message =
    document.getElementById("messageCommande").value;

    const params =
new URLSearchParams(window.location.search);

const menu =
params.get("menu");


    try {

        const reponse =
        await fetch(
            "https://vite-gourmand-api-kgvk.onrender.com/commande",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                    menu,
                    nom,
                    adresseMail,
                    nombrePersonnes,
                    dateReservation,
                    message

                })

            }
        );

        const data =
        await reponse.json();

        alert(data.message);

        formCommande.reset();

    }

    catch (error) {

        console.log(error);

    }

});

}

// EMAIL UTILISATEUR

const adresseMail =
localStorage.getItem("adresseMail");

// RECUPERATION PROFIL

async function chargerProfil() {

    try {

        const reponse =
        await fetch(
            `https://vite-gourmand-api-kgvk.onrender.com/profil/${adresseMail}`
        );

        const utilisateur =
        await reponse.json();

        // AFFICHAGE PROFIL

        document.getElementById(
            "profilNom"
        ).value =
        utilisateur.nom;

        document.getElementById(
               "profilPrenom"
        ).value =
        utilisateur.prenom;

        document.getElementById(
            "profilEmail"
        ).value =
        utilisateur.adresseMail;

        document.getElementById(
            "profilTelephone"
        ).value =
        utilisateur.telephone;

    }

    catch (error) {

        console.log(error);

    }

}

// RECUPERATION COMMANDES

async function chargerCommandes() {

    try {

        const reponse =
        await fetch(
            `https://vite-gourmand-api-kgvk.onrender.com/mes-commandes/${adresseMail}`
        );

        const commandes =
        await reponse.json();

        const container =
        document.getElementById(
            "commandesContainer"
        );

        container.innerHTML = "";

        commandes.forEach((commande) => {

            container.innerHTML += `

            <div class="commande-card">

                <h3>
                    ${commande.menu}
                </h3>

                <p>
                    ${commande.nombrePersonnes}
                    personnes
                </p>

                <p>
                    Date :
                    ${commande.dateReservation}
                </p>

                <p class="statut">

                    Statut :
                    ${commande.statut}

                </p>

                <button class="btn-commande" onclick="supprimerCommande('${commande._id}')">Annuler </button>

            </div>

            `;

        });

    }

    catch (error) {

        console.log(error);

    }

}


// LANCEMENT

chargerProfil();

chargerCommandes();

// SUPPRESSION COMMANDE

async function supprimerCommande(id) {

    try {

        const reponse =
        await fetch(
            `https://vite-gourmand-api-kgvk.onrender.com/commande/${id}`,
            {

                method: "DELETE"

            }
        );

        const data =
        await reponse.json();

        alert(data.message);

        // RECHARGER COMMANDES

        chargerCommandes();

    }

    catch (error) {

        console.log(error);

    }

}

// MODIFICATION PROFIL

const btnModifierProfil =
document.getElementById(
    "btnModifierProfil"
);

if (btnModifierProfil) {

    btnModifierProfil.addEventListener(
        "click",
        async () => {

            const nom =
            document.getElementById(
                "profilNom"
            ).value;

            const prenom =
            document.getElementById(
                "profilPrenom"
            ).value;

            const telephone =
            document.getElementById(
                "profilTelephone"
            ).value;

            try {

                const reponse =
                await fetch(

                    `https://vite-gourmand-api-kgvk.onrender.com/profil/${adresseMail}`,

                    {

                        method: "PUT",

                        headers: {

                            "Content-Type":
                            "application/json"

                        },

                        body: JSON.stringify({

                            nom,
                            prenom,
                            telephone

                        })

                    }

                );

                const data =
                await reponse.json();

                alert(data.message);

            }

            catch (error) {

                console.log(error);

            }

        }

    );

}


// ESPACE EMPLOYE

async function chargerToutesCommandes() {

    try {

        const reponse =
        await fetch(
            "https://vite-gourmand-api-kgvk.onrender.com/commandes"
        );

        const commandes =
        await reponse.json();

        console.log(commandes);
        console.log(reponse);

        const container =
        document.getElementById(
            "adminCommandesContainer"
        );

        // SI PAS SUR employe.html

        if (!container) {

            return;

        }

        container.innerHTML = "";

        commandes.forEach((commande) => {

            container.innerHTML += `

            <div class="commande-card">

                <h3>
                    ${commande.menu}
                </h3>

                <p>

                    Client :
                    ${commande.nom}

                </p>

                <p>

                    ${commande.nombrePersonnes}
                    personnes

                </p>

                <p>

                    Date :
                    ${commande.dateReservation}

                </p>

                <p class="statut">

                  Statut :
                    ${commande.statut || "En attente"}

                </p>

                <select
                   onchange="modifierStatut(
                         '${commande._id}',
                        this.value
                                  )"
                        >

    <option
    ${commande.statut === "En attente"
    ? "selected"
    : ""}
>

    En attente

</option>

<option
    ${commande.statut === "Accepté"
    ? "selected"
    : ""}
>

    Accepté

</option>

<option
    ${commande.statut === "En préparation"
    ? "selected"
    : ""}
>

    En préparation

</option>

<option
    ${commande.statut === "Livré"
    ? "selected"
    : ""}
>

    Livré

</option>

<option
    ${commande.statut === "Terminée"
    ? "selected"
    : ""}
>

    Terminée

</option>

</select>

                <button
                   class="btn-commande"
                    onclick="supprimerCommandeAdmin('${commande._id}')"
                      >

    Supprimer

</button>

            </div>

            `;

        });

    }

    catch (error) {

        console.log(error);

    }

}


// LANCEMENT ESPACE EMPLOYE

chargerToutesCommandes(); 


// ESPACE ADMIN

async function chargerUsers() {

    try {

        const reponse =
        await fetch(
            "https://vite-gourmand-api-kgvk.onrender.com/users"
        );

        const users =
        await reponse.json();

        const container =
        document.getElementById(
            "adminUsersContainer"
        );

        // SI PAS SUR admin.html

        if (!container) {

            return;

        }

        container.innerHTML = "";

        users.forEach((user) => {

            container.innerHTML += `

            <div class="commande-card">

                <h3>
                    ${user.nom}
                </h3>

                <p>

                    ${user.adresseMail}

                </p>

                <p>

    Role :
    ${user.role}

</p>

<button
    class="btn-commande"
    onclick="supprimerUser('${user._id}')"
>

    Supprimer

</button>

            </div>

            `;

        });

    }

    catch (error) {

        console.log(error);

    }

}


// LANCEMENT ADMIN

chargerUsers();

// SUPPRESSION USER

async function supprimerUser(id) {

    try {

        const reponse =
        await fetch(

            `https://vite-gourmand-api-kgvk.onrender.com/user/${id}`,

            {

                method: "DELETE"

            }

        );

        const data =
        await reponse.json();

        alert(data.message);

        // RELOAD USERS

        chargerUsers();

    }

    catch (error) {

        console.log(error);

    }

}


// SUPPRESSION COMMANDE ADMIN

async function supprimerCommandeAdmin(id) {

    try {

        const reponse =
        await fetch(

            `https://vite-gourmand-api-kgvk.onrender.com/commande/${id}`,

            {

                method: "DELETE"

            }

        );

        const data =
        await reponse.json();

        alert(data.message);

        // RELOAD COMMANDES

        chargerToutesCommandes();

    }

    catch (error) {

        console.log(error);

    }

}


// MODIFIER STATUT

async function modifierStatut(id, statut) {

    try {

        const reponse =
        await fetch(

            `https://vite-gourmand-api-kgvk.onrender.com/commande/${id}`,

            {

                method: "PUT",

                headers: {

                    "Content-Type":
                    "application/json"

                },

                body: JSON.stringify({

                    statut

                })

            }

        );

        const data =
        await reponse.json();

        alert(data.message);

        setTimeout(() => {

    chargerToutesCommandes();

}, 300);

    }

    catch (error) {

        console.log(error);

    }

}