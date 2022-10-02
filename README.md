# LOCALIB

Localib est une application de gestion de locations de véhicules et de locataires. 

Voici la liste des différentes fonctionnalités de l’application :
-	Gestion des véhicules :
    - Répertorier la liste des véhicules 
    - Ajouter de nouveaux véhicules
    - Accéder aux informations des véhicules
    - Mettre à jour les informations sur les véhicules 
-	Gestion des locataires :
    - Ajouter des nouveaux locataires 
    - Accéder à la liste des locataires inscrits ainsi qu’à leurs informations
    - Mettre à jour les informations sur les locataires déjà inscrits
    - Suppression des informations sur les locataires
-	Gestion des locations :
    - Vérifier la disponibilité des véhicules selon une date de début de location et une date de fin de location (**en cours de création**)
    - Déterminer automatiquement le prix de la location selon la période choisie
    - Etablir automatiquement des récapitulatifs de location
- Locations de véhicules:
    - Ajouter un locataire à une location
    - Ajouter des dates de location à un véhicule (début de location et fin de location)

## A propos

Vous trouverez dans ce dépôt 3 dossiers à la racine:
- le dossier **front** qui contient la partie front-end (Angular)
- le dossier **api** qui contient la partie back-end (NestJS)
- le dossier **assets** qui contient les wireframes et maquettes de l'applications 

### Installation

1. **Cloner le projet**
`git clone https://github.com/CindyGraffin/localib.git` 
2. **Installer les package nécessaires dans le dossier `/api` puis créer le fichier `.env` permettant de se connecter à la base de données et de lancer le serveur sur le bon port**
````
cd api
npm install
````
Exemple de fichier `.env`:
````
PORT=8000
## Database config
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=1234
DATABASE_DB=localib 
````
3. **Créer une base de donnée PostgreSQL**  
4. **Lancer le serveur back**
`npm run start:dev`
5. **Installer les package nécessaires dans le dossier `/front`**
````
cd front
npm install
````
6. **Lancer le serveur front**
`ng serve`
7. **Profitez pleinement de l'application 😎**

#### Diagramme UML de classe permettant de visualiser les différentes entités de l'application et leurs relations

Voici le diagramme UML de classe de l'application:

![Diagramme UML de l'application](/assets/diagramme-uml-classe.png "Diagramme UML")

#### Diagramme UML des différents cas d'utilisation de l'application

Voici le diagramme de cas d'utilisation de l'application:

![Diagramme de cas d'utilisation de l'application](/assets/diagramme-cas-utilisation.png "Diagramme Cas Utilisation")