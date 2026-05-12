const mongoose = require("mongoose");

const commandeSchema =
new mongoose.Schema({

    menu: {
        type: String,
        required: true
    },

    nom: {
        type: String,
        required: true
    },

    adresseMail: {
        type: String,
        required: true
    },

    nombrePersonnes: {
        type: Number,
        required: true
    },

    dateReservation: {
        type: String,
        required: true
    },

    message: {
        type: String
    }

});

module.exports =
mongoose.model(
    "Commande",
    commandeSchema
);