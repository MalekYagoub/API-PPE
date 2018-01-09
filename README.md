# API rest pour le PPE

## Liste des routes

Les éléments précédé par un : sont dynamique

### Matériels

* GET /materiels/ - Retourne tout les matériels
* GET /materiels/typeMateriel/:idTypeMateriel - Retourne tout les matériels correspondant au type idTypeMateriel
* POST /materiels/ - Reçoit montantCaution, idTypeMateriel, libelle et ajoute un matériel
* GET /materiels/:idMateriel - Retourne le matériel avec l'id idMateriel
* DELETE /materiels/:idMateriel - Supprime le matériel avec l'id idMateriel
