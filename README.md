# Portail de connexion HSBC

Ce site est utilisé pour gérer des utilisateurs (on simule un site HSBC de façon très simpliste). Il permet de s'enregistrer et de se connecter pour consulter son profil ou modifier certaines informations. De plus, il permet de répondre à des requêtes venant de l'écosysteme Alexa et de lier un skill (une application tournant sur un Amazon Echo) à un compte HSBC.

Ce site est réalisé en Node.js avec l'aide du framework Express et avec le moteur de template Jade. Le front-end a été créé à l'aide de  Bootstrap dans un soucis de rapidité (ce site est juste là pour réaliser un POC dans un projet de recherche autour d'Alexa).

Si vous êtes seulement interessé par la fonctionnalité d'account linking avec un skill alexa, vous pouvez vous limiter à regarder le fichier alexaLogin.js situé dans le sous-répertoire "routes".

# Deployment

Créer un fork du projet https://github.com/LouisPouillot/HSBC_PORTAL sur votre github
* Se créer un compte sur https://www.heroku.com/ (avec une adresse mail valide)
* Une fois le mail vérifié et connecté, cliquez sur Create a new App
* Choisir un nom pour l’application
* Pour la méthode de déploiement sélectionner GitHub et connectez vous sur Github et autorisez les accès si nécessaire
* Une fois le compte heroku lié à Github sélectionné le repo que vous avez fork
* Déployez la branche master

Pour accéder l'url de la page de login est: https://{app-name}.herokuapp.com/login
