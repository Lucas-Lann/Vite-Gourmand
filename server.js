const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const User = require("./models/User");

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

        if (
            utilisateur.motDePasse !==
            req.body.motDePasse
        ) {

            return res.status(401).json({
                message: "Mot de passe incorrect"
            });

        }

        // CONNEXION OK

        res.json({
            message: "Connexion réussie"
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

        const nouvelUtilisateur =
        new User(req.body);

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


// LANCEMENT SERVEUR

app.listen(PORT, () => {

    console.log(
        `Serveur lancé sur http://localhost:${PORT}`
    );

});