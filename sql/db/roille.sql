-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: roille
-- ------------------------------------------------------
-- Server version	5.7.17-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `idClient` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `telephone` char(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idClient`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (53,'Malek Yagoub','39 rue Arago','0627502876','malek.yagoub@hotmail.fr','b3a500224a8157d7c961adaf1a9c85dba97a033b'),(54,'Linkky','18 eme','0600000000','linkky@test.fr','b3a500224a8157d7c961adaf1a9c85dba97a033b');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contrat`
--

DROP TABLE IF EXISTS `contrat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contrat` (
  `idContrat` int(11) NOT NULL AUTO_INCREMENT,
  `departLocation` date DEFAULT NULL,
  `finLocation` date DEFAULT NULL,
  `montant` int(11) DEFAULT NULL,
  `idClient` int(11) DEFAULT NULL,
  `idMateriel` int(11) DEFAULT NULL,
  PRIMARY KEY (`idContrat`),
  KEY `fk_client` (`idClient`),
  KEY `idMateriel` (`idMateriel`),
  CONSTRAINT `contrat_ibfk_1` FOREIGN KEY (`idMateriel`) REFERENCES `materiel` (`idMateriel`),
  CONSTRAINT `fk_client` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contrat`
--

LOCK TABLES `contrat` WRITE;
/*!40000 ALTER TABLE `contrat` DISABLE KEYS */;
INSERT INTO `contrat` VALUES (20,'2018-01-04','2018-01-05',148,53,4),(21,'2018-01-08','2018-01-08',158,53,7),(22,'2018-01-12','2018-01-13',582,53,22),(23,'2018-01-08','2018-01-08',74,53,4),(24,'2018-01-11','2018-01-17',56,53,29);
/*!40000 ALTER TABLE `contrat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intervention`
--

DROP TABLE IF EXISTS `intervention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `intervention` (
  `idIntervention` int(11) NOT NULL AUTO_INCREMENT,
  `dateHeureIntervention` datetime DEFAULT NULL,
  `tempsHeures` int(11) DEFAULT NULL,
  `commentaire` varchar(255) DEFAULT NULL,
  `idTechnicien` int(11) DEFAULT NULL,
  `idContrat` int(11) DEFAULT NULL,
  PRIMARY KEY (`idIntervention`),
  KEY `fk_technicien` (`idTechnicien`),
  KEY `fk_contrat2` (`idContrat`),
  CONSTRAINT `fk_contrat2` FOREIGN KEY (`idContrat`) REFERENCES `contrat` (`idContrat`),
  CONSTRAINT `fk_technicien` FOREIGN KEY (`idTechnicien`) REFERENCES `technicien` (`idTechnicien`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention`
--

LOCK TABLES `intervention` WRITE;
/*!40000 ALTER TABLE `intervention` DISABLE KEYS */;
/*!40000 ALTER TABLE `intervention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiel`
--

DROP TABLE IF EXISTS `materiel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiel` (
  `idMateriel` int(11) NOT NULL AUTO_INCREMENT,
  `montantCaution` int(11) DEFAULT NULL,
  `idTypeMateriel` int(11) DEFAULT NULL,
  `libelle` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idMateriel`),
  KEY `idTypeMateriel` (`idTypeMateriel`),
  CONSTRAINT `materiel_ibfk_1` FOREIGN KEY (`idTypeMateriel`) REFERENCES `typeMateriel` (`idTypeMateriel`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiel`
--

LOCK TABLES `materiel` WRITE;
/*!40000 ALTER TABLE `materiel` DISABLE KEYS */;
INSERT INTO `materiel` VALUES (4,74,1,'Bétonnière'),(5,63,1,'Burineur'),(6,42,4,'Agitateur de peinture'),(7,158,4,'Pistolet peinture'),(8,73,5,'Aspirateur eau'),(9,63,5,'Aspirateur poussière'),(10,47,5,'Cireuse de sol'),(11,171,5,'Autolaveuse'),(12,34,2,'Scie sauteuse'),(13,36,2,'Scie circulaire'),(14,47,2,'Scie sabre'),(15,33,2,'Ponceuse lustreuse'),(16,51,2,'Ponceuse à parquet'),(17,61,2,'Perforateur burineur'),(18,31,2,'Perforateur'),(19,64,3,'Groupe électrogène 2 kVA 230 V - essence'),(20,294,3,'Groupe électrogène 100 kVA 230 / 400 V - diesel'),(21,85,3,'Groupe électrogène 4.2 kVA 230 V - diesel'),(22,291,6,'Elévateur vert. élec. 12.0m 2p'),(23,387,6,'Elévateur articulé diesel 12.2m'),(24,89,6,'Echafaudage roulant aluminium 4.8m'),(25,109,6,'Echafaudage roulant aluminium 6.8m'),(26,56,6,'Echelle 11.15m 3 plans'),(27,24,6,'Echelle isolante 2.95m'),(28,3,7,'Bac de manutention 60x40x31'),(29,8,7,'Gant anti coupure'),(30,9,7,'Gant spécial froid'),(31,121,8,'Poste de soudure 230 V - 33 à 180 A'),(32,143,8,'Groupe de soudage 40 à 220 A - essence'),(33,51,8,'Cintreuse 230 V tubes cuivre, acier et inox'),(34,84,8,'Gèle-tube 230 V'),(35,74,8,'Pince à sertir automatique'),(36,47,8,'Pompe d\'épreuve manuelle'),(37,403,8,'Pompe à chape liquide'),(38,56,8,'Pompe à détartrer 230V'),(39,25,1,'Brise-béton 2200W, 115V'),(40,122,1,'Foreuse diamant 230V');
/*!40000 ALTER TABLE `materiel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technicien`
--

DROP TABLE IF EXISTS `technicien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `technicien` (
  `idTechnicien` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephone` char(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idTechnicien`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technicien`
--

LOCK TABLES `technicien` WRITE;
/*!40000 ALTER TABLE `technicien` DISABLE KEYS */;
INSERT INTO `technicien` VALUES (5,'Yagoub','Malek','0627502876','malek.yagoub@hotmail.fr','b3a500224a8157d7c961adaf1a9c85dba97a033b');
/*!40000 ALTER TABLE `technicien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typeMateriel`
--

DROP TABLE IF EXISTS `typeMateriel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `typeMateriel` (
  `idTypeMateriel` int(11) NOT NULL AUTO_INCREMENT,
  `designation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idTypeMateriel`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeMateriel`
--

LOCK TABLES `typeMateriel` WRITE;
/*!40000 ALTER TABLE `typeMateriel` DISABLE KEYS */;
INSERT INTO `typeMateriel` VALUES (1,'Gros œuvre, terrassement'),(2,'Perforation, sciage, ponçage'),(3,'Groupe électrogène'),(4,'Peinture, rénovation'),(5,'Nettoyage'),(6,'Élévation'),(7,'Manutention'),(8,'Soudure, plomberie, pompes');
/*!40000 ALTER TABLE `typeMateriel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-09 10:51:11
