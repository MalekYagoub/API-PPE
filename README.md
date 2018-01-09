# API rest pour le PPE

## Liste des routes

Les éléments précédé par un : sont dynamique

### Matériels

* **GET /materiels/** - Retourne tout les matériels
* **GET /materiels/typeMateriel/:idTypeMateriel** - Retourne tout les matériels correspondant au type idTypeMateriel
* **POST /materiels/** - Reçoit montantCaution, idTypeMateriel, libelle et ajoute un matériel
* **GET /materiels/:idMateriel** - Retourne le matériel avec l'id idMateriel
* **DELETE /materiels/:idMateriel** - Supprime le matériel avec l'id idMateriel

### Clients

* **GET /clients/** - Retourne tout les clients
* **POST /clients/connexion/** - Reçoit email, mdp puis retourne un status 200 si le client existe ou une erreur 500 si le client n'existe pas
* **POST /clients/** - Reçoit nom, adresse, telephone, email, mdp et crée un client
* **GET /clients/:clientId** - Retourne le client avec l'id clientId
* **DELETE /clients/:clientId** - Supprime le client avec l'id clientId

### Contrats

* **GET /contrats/** - Retourne tout les contrats
* **GET /contrats/client/:idClient** - Retourne tout les contrats coresspondant au client avec l'id idClient
* **POST /contrats/** - Reçoit departLocation (date), finLocation (date), montant, idClient, idMateriel et crée un contrat
* **GET /contrats/:idContrat** - Retourne le contrat avec l'id idContrat

### Techniciens

* **GET /techniciens/** - Retourne tout les techniciens
* **GET /techniciens/:idTechnicien** - Retourne le technicien avec l'id idTechnicien
* **POST /techniciens/** - Reçoit nom, prenom, telephone, email, mdp et crée un technicien
* **POST /techniciens/connexion/** - Reçoit email, mdp puis retourne un status 200 si le technicien existe ou une erreur 500 si le technicien n'existe pas

### Types matériels

* **GET /typesMateriels/** - Retourne tout les types de matériels
* **GET /typesMateriels/:idTypeMateriel** - Retourne le type de matériel correspondant à idTypeMateriel
* **POST /typesMateriels/** - Reçoit designationTypeMateriel et crée un type de matériel
