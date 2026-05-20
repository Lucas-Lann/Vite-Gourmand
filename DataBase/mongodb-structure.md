# Structure MongoDB - Vite&Gourmand

## Collection utilisateurs

```json
{
  "nom": "string",
  "prenom": "string",
  "telephone": "string",
  "adresse": "string",
  "adresseMail": "string",
  "motDePasse": "string",
  "role": "client"
}
```

Cette collection permet de stocker les utilisateurs de l’application.

Les rôles disponibles sont :
- client
- employe
- administrateur



## Collection reservations

```json
{
  "menu": "string",
  "nom": "string",
  "adresseMail": "string",
  "nombrePersonnes": 0,
  "dateReservation": "string",
  "message": "string",
  "statut": "En attente"
}
```

Cette collection permet de stocker les réservations et commandes effectuées par les clients.

Les statuts possibles sont :
- En attente
- Acceptée
- En préparation
- Livrée
- Terminée



## Base de données utilisée

Le projet utilise MongoDB Atlas comme base de données NoSQL.

MongoDB Atlas est utilisé pour gérer les données des utilisateurs et des réservations du projet.