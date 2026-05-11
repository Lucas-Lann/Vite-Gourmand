const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3000;


// ROUTE TEST

app.get("/", (req, res) => {

    res.send("Serveur Vite&Gourmand");

});

// ROUTE INSCRIPTION

app.post("/inscription", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Inscription reçue"
    });

});


// LANCEMENT SERVEUR

app.listen(PORT, () => {

    console.log(
        `Serveur lancé sur http://localhost:${PORT}`
    );

});