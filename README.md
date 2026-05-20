# Vite-Gourmand

Dossier pro studi : 

## Application en ligne

Front-end : https://vite-gourmand-blond.vercel.app

API : https://vite-gourmand-api-kgvk.onrender.com

# Description du projet :

Vite&Gourmand est une application web de gestion de commandes traiteur développée dans le cadre de l’ECF Studi.

L’objectif de cette application est de permettre aux clients de consulter différents menus et de passer des commandes directement en ligne via une interface simple.

L’application dispose également d’un espace employé ainsi qu’un espace administrateur permettant la gestion des commandes et des utilisateurs.


# Fonctionnalités : 

# Client
- Création de compte
- Connexion sécurisée
- Consultation des menus
- Réservation de menus
- Consultation du statut des commandes

# Employé
- Consultation des commandes
- Modification des statuts des commandes

# Administrateur
- Gestion des utilisateurs
- Gestion complète des commandes


## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas


## Installation du projet en local

### 1. Cloner le dépôt GitHub

git clone https://github.com/Lucas-Lann/Vite-Gourmand.git


### 2. Ouvrir le projet


cd Vite-Gourmand

### 3. Installer les dépendances


npm install


### 4. Configurer les variables d’environnement

Créer un fichier `.env` à la racine du projet :

MONGO_URI=votre_lien_mongodb
PORT=3000


### 5. Lancer le serveur

node server.js


Le serveur sera accessible sur :

http://localhost:3000


## Comptes de test

### Compte client
Email : teststudi@hotmail.fr  
Mot de passe : Teststudi1234@

### Compte employé
Email : espaceemployer@hotmail.fr  
Mot de passe : Employer12@

### Compte administrateur
Email : Adminstudi@hotmail.fr  
Mot de passe : Admin1234@


## Déploiement

### Front-end
Déployé sur Vercel.

### Back-end
Déployé sur Render.

### Base de données
MongoDB Atlas.