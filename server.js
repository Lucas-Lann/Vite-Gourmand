const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const User = require("./models/User");

const Commande = require("./models/Commande");

const bcrypt = require("bcrypt");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
"mongodb+srv://lucaslannoy_db_user:studi1234@cluster0.icfewps.mongodb.net/vitegourmand?appName=Cluster0"
)

.then(() => {

    console.log("MongoDB connecté");

})

.catch((error) => {

    console.log(error);

});

const PORT = 3000;

// ROUTE TEST

app.get("/", (req, res) => {

    res.send("Serveur Vite&Gourmand");

});

// ROUTE INSCRIPTION

app.post("/connexion", async (req, res) => {

    try {

        const utilisateur =
        await User.findOne({

            adresseMail:
            req.body.adresseMail

        });

        // EMAIL INTROUVABLE

        if (!utilisateur) {

            return res.status(404).json({
                message: "Utilisateur introuvable"
            });

        }

        // MOT DE PASSE INCORRECT

const motDePasseValide =
await bcrypt.compare(
    req.body.motDePasse,
    utilisateur.motDePasse
);

if (!motDePasseValide) {

    return res.status(401).json({
        message: "Mot de passe incorrect"
    });

}

        // CONNEXION OK

       res.json({

    message: "Connexion réussie",

    role:
    utilisateur.role

});

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Erreur serveur"
        });

    }

});

app.post("/inscription", async (req, res) => {

    try {

        // HASH MOT DE PASSE

        const motDePasseHash =
        await bcrypt.hash(
            req.body.motDePasse,
            10
        );

        const nouvelUtilisateur =
        new User({

            ...req.body,

            motDePasse:
            motDePasseHash

        });

        await nouvelUtilisateur.save();

        res.json({
            message: "Utilisateur enregistré"
        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Erreur serveur"
        });

    }

});


// ROUTE COMMANDE

app.post("/commande", async (req, res) => {

    try {

        const nouvelleCommande =
        new Commande(req.body);

        await nouvelleCommande.save();

        res.json({
            message: "Commande enregistrée "
        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Erreur serveur"
        });

    }

});


// ROUTE PROFIL

app.get("/profil/:email", async (req, res) => {

    try {

        const utilisateur =
        await User.findOne({

            adresseMail:
            req.params.email

        });

        res.json(utilisateur);

    }

    catch (error) {

        console.log(error);

    }

});


// ROUTE COMMANDES UTILISATEUR

app.get("/mes-commandes/:email", async (req, res) => {

    try {

        const commandes =
        await Commande.find({

            adresseMail:
            req.params.email

        });

        res.json(commandes);

    }

    catch (error) {

        console.log(error);

    }

});

// SUPPRESSION COMMANDE

app.delete("/commande/:id", async (req, res) => {

    try {

        await Commande.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:
            "Commande annulée"
        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message:
            "Erreur serveur"
        });

    }

});

// MODIFICATION PROFIL

app.put("/profil/:email", async (req, res) => {

    try {

        await User.findOneAndUpdate(

            {
                adresseMail:
                req.params.email
            },

            req.body

        );

        res.json({
            message:
            "Profil modifié"
        });

    }

    catch (error) {

        console.log(error);

    }

});


// TOUTES LES COMMANDES

app.get("/commandes", async (req, res) => {

    try {

        const commandes =
        await Commande.find();

        res.json(commandes);

    }

    catch (error) {

        console.log(error);

    }

});


// TOUS LES UTILISATEURS

app.get("/users", async (req, res) => {

    try {

        const users =
        await User.find();

        res.json(users);

    }

    catch (error) {

        console.log(error);

    }

});


// SUPPRESSION USER

app.delete("/user/:id", async (req, res) => {

    try {

        await User.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:
            "Utilisateur supprimé"
        });

    }

    catch (error) {

        console.log(error);

    }

});


// MODIFIER STATUT COMMANDE

app.put("/commande/:id", async (req, res) => {

    try {

        await Commande.findByIdAndUpdate(

            req.params.id,

            {

                statut:
                req.body.statut

            }

        );

        res.json({

            message:
            "Statut modifié"

        });

    }

    catch (error) {

        console.log(error);

    }

});

// LANCEMENT SERVEUR

app.listen(PORT, () => {

    console.log(
        `Serveur lancé sur http://localhost:${PORT}`
    );

});