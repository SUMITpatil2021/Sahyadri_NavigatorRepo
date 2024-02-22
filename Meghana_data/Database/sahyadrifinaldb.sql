-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: sahyadridb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookedtrekk`
--

DROP TABLE IF EXISTS `bookedtrekk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookedtrekk` (
  `bookid` int NOT NULL AUTO_INCREMENT,
  `charges` double DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `noofpersons` int DEFAULT NULL,
  `pickuppoint` varchar(255) DEFAULT NULL,
  `totalcharges` double DEFAULT NULL,
  `trekkingpoint` varchar(255) DEFAULT NULL,
  `trekkname` varchar(255) DEFAULT NULL,
  `trekkid` int DEFAULT NULL,
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`bookid`),
  KEY `FKgx8rfdb9a0eg43mjvp44bjmd` (`trekkid`),
  KEY `FKaven4is3nbjll4l79fs3hpfid` (`userid`),
  CONSTRAINT `FKaven4is3nbjll4l79fs3hpfid` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`),
  CONSTRAINT `FKgx8rfdb9a0eg43mjvp44bjmd` FOREIGN KEY (`trekkid`) REFERENCES `trekk_details` (`trekkid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookedtrekk`
--

LOCK TABLES `bookedtrekk` WRITE;
/*!40000 ALTER TABLE `bookedtrekk` DISABLE KEYS */;
INSERT INTO `bookedtrekk` VALUES (3,500,'Pune','2024-03-03 05:30:00.000000',2,'Lonavala',1000,'Lohgad Fort','Lohgad Trekk',1,6),(4,500,'Pune','2024-03-03 05:30:00.000000',2,'Lonavala',1000,'Lohgad Fort','Lohgad Trekk',1,5),(5,-500,'Pune','2024-01-10 05:30:00.000000',2,'Lonavala',-1000,'Lohgad','Lohgad Trekk',11,6);
/*!40000 ALTER TABLE `bookedtrekk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facilities`
--

DROP TABLE IF EXISTS `facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facilities` (
  `facilityid` int NOT NULL AUTO_INCREMENT,
  `firstaid` varchar(255) DEFAULT NULL,
  `food` varchar(255) DEFAULT NULL,
  `guidename` varchar(255) DEFAULT NULL,
  `trainingprogram` varchar(255) DEFAULT NULL,
  `transportation` varchar(255) DEFAULT NULL,
  `trekkingpole` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`facilityid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facilities`
--

LOCK TABLES `facilities` WRITE;
/*!40000 ALTER TABLE `facilities` DISABLE KEYS */;
INSERT INTO `facilities` VALUES (1,'true','true','Abhishek','true','true','true'),(2,'true','true','Sumit','true','false','false'),(4,'false','false','','false','false','false'),(5,'true','true','xyz','true','true','true'),(6,'true','false','Dhanshri','true','true','false');
/*!40000 ALTER TABLE `facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `imgid` int NOT NULL AUTO_INCREMENT,
  `image` longblob,
  PRIMARY KEY (`imgid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,NULL),(2,NULL),(4,NULL),(5,NULL),(6,NULL);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `roleid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7556csmui0fcfn2ssqxmyt313` (`roleid`),
  CONSTRAINT `FK7556csmui0fcfn2ssqxmyt313` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'Megha@123',1,'Megha',1),(2,'Supriya@123',1,'Supriya',1),(3,'Dhanshri@123',1,'Dhanshri',1),(4,'Sumit@123',1,'Sumit',1),(5,'Placeclub@123',1,'Placeclub',3),(8,'AdvMaharashtra@123',1,'AdvMaharashtra',3),(9,'Kajal@123',1,'Kajal',2),(10,'Kunal@123',1,'Kunal',2),(11,'SahyadriNavigator@123',1,'SahyadriNavigator',3);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `paymentid` int NOT NULL AUTO_INCREMENT,
  `noofpersons` int DEFAULT NULL,
  `paymentdate` datetime(6) DEFAULT NULL,
  `paymentstatus` bit(1) DEFAULT NULL,
  `totalcharges` double DEFAULT NULL,
  `trekkername` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`paymentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `roleid` int NOT NULL,
  `roletype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Admin'),(2,'Trekker'),(3,'TrekkingClub');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trekk_details`
--

DROP TABLE IF EXISTS `trekk_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trekk_details` (
  `trekkid` int NOT NULL AUTO_INCREMENT,
  `charges` double DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `trekkname` varchar(255) DEFAULT NULL,
  `clubid` int DEFAULT NULL,
  `facilityid` int DEFAULT NULL,
  `locationid` int DEFAULT NULL,
  `imgid` int DEFAULT NULL,
  PRIMARY KEY (`trekkid`),
  KEY `FK8gp8vwagjwaktnmrwrp1haq3w` (`clubid`),
  KEY `FKc6kl6ht0vwaiq8yue4l30csfx` (`facilityid`),
  KEY `FKipxljblac57vxwb3oa7vxan8x` (`locationid`),
  KEY `FKtn42w8dxofgq0wu8w7odg7v4o` (`imgid`),
  CONSTRAINT `FK8gp8vwagjwaktnmrwrp1haq3w` FOREIGN KEY (`clubid`) REFERENCES `trekkingclub` (`clubid`),
  CONSTRAINT `FKc6kl6ht0vwaiq8yue4l30csfx` FOREIGN KEY (`facilityid`) REFERENCES `facilities` (`facilityid`),
  CONSTRAINT `FKipxljblac57vxwb3oa7vxan8x` FOREIGN KEY (`locationid`) REFERENCES `trekklocation` (`locationid`),
  CONSTRAINT `FKtn42w8dxofgq0wu8w7odg7v4o` FOREIGN KEY (`imgid`) REFERENCES `image` (`imgid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trekk_details`
--

LOCK TABLES `trekk_details` WRITE;
/*!40000 ALTER TABLE `trekk_details` DISABLE KEYS */;
INSERT INTO `trekk_details` VALUES (1,500,'2024-03-03 05:30:00.000000','Lohgad Trekk',4,1,1,1),(8,600,'2024-02-22 05:30:00.000000','Vasota trekk',1,2,2,2),(10,0,NULL,'',5,4,4,4),(11,-500,'2024-01-10 05:30:00.000000','Lohgad Trekk',5,5,5,5),(12,0,'2024-02-22 10:24:49.538000',NULL,NULL,NULL,NULL,NULL),(13,500,'2024-02-22 05:30:00.000000','Rajgad Trekk',1,6,6,6);
/*!40000 ALTER TABLE `trekk_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trekkingclub`
--

DROP TABLE IF EXISTS `trekkingclub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trekkingclub` (
  `clubid` int NOT NULL AUTO_INCREMENT,
  `contact` varchar(255) DEFAULT NULL,
  `edate` datetime(6) DEFAULT NULL,
  `emailid` varchar(255) DEFAULT NULL,
  `licenseno` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `ownername` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  PRIMARY KEY (`clubid`),
  KEY `FK5prxyq464j0nm05pv8c2uoaob` (`loginid`),
  CONSTRAINT `FK5prxyq464j0nm05pv8c2uoaob` FOREIGN KEY (`loginid`) REFERENCES `login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trekkingclub`
--

LOCK TABLES `trekkingclub` WRITE;
/*!40000 ALTER TABLE `trekkingclub` DISABLE KEYS */;
INSERT INTO `trekkingclub` VALUES (1,'9093675432','2016-02-19 05:30:00.000000','placetoplace@gmail.com',2987,'Place ToPlace','Shubham','Placeclub@123','Placeclub',5),(4,'8108999134','2018-02-21 05:30:00.000000','adventuremaha@gmail.com',9134,'Adventure maharashtra','Sanket','AdvMaharashtra@123','AdvMaharashtra',8),(5,'7057302875','2024-03-29 05:30:00.000000','sahyadrinavigator@gmail.com',4533,'Sahyadri Navigator','Supriya','SahyadriNavigator@123','SahyadriNavigator',11);
/*!40000 ALTER TABLE `trekkingclub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trekklocation`
--

DROP TABLE IF EXISTS `trekklocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trekklocation` (
  `locationid` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `trekkingpoint` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`locationid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trekklocation`
--

LOCK TABLES `trekklocation` WRITE;
/*!40000 ALTER TABLE `trekklocation` DISABLE KEYS */;
INSERT INTO `trekklocation` VALUES (1,'Pune','Lonavala','Lohgad Fort'),(2,'Nashik','Lake','Vasota'),(4,'Select City','',''),(5,'Pune','Lonavala','Lohgad'),(6,'Pune','velhe','Rajgad Fort');
/*!40000 ALTER TABLE `trekklocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `contact` varchar(255) DEFAULT NULL,
  `emailid` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  PRIMARY KEY (`userid`),
  KEY `FKfav4u3xydspnypapu0vfm2d1k` (`loginid`),
  CONSTRAINT `FKfav4u3xydspnypapu0vfm2d1k` FOREIGN KEY (`loginid`) REFERENCES `login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'9011924386','meghanabharambe@gmail.com','Meghana','Megha@123','Megha',1),(2,'7057107041','supriyasutar543@gmail.com','Supriya','Supriya@123','Supriya',2),(3,'9145674679','dhanshrikshirsagar12@gmail.com','Dhanshri','Dhanshri@123','Dhanshri',3),(4,'7447882097','sumit.patil2021@gmail.com','Sumit','Sumit@123','Sumit',4),(5,'9789354276','kajal@gmail.com','Kajal','Kajal@123','Kajal',9),(6,'9049433191','kunal@gmail.com','Kunal','Kunal@123','Kunal',10);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-22 14:34:26
