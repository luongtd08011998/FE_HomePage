1. Method Post: http://localhost/api/v1/qlkh/auth/login
{
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoyMzYxLCJzdWIiOiIwMDgwMDIxOSIsImRpZ2lDb2RlIjoiMDA4MDAyMTkiLCJleHAiOjE3NzU3MTgzNzcsImlhdCI6MTc3NTY4MzM3N30.0upL-aWmUmxYXeNxC_MNIvlq3qkib43hXWXRNln-I3s"
    },
    "message": "Đăng nhập thành công",
    "statusCode": 200
}
2.Method Get: http://localhost/api/v1/qlkh/invoices
{
    "data": {
        "meta": {
            "page": 1,
            "pageSize": 20,
            "pages": 7,
            "total": 131
        },
        "result": [
            {
                "id": 2370,
                "digiCode": "00800219",
                "customerName": "NGUYỄN HỮU ĐỒNG",
                "amount": 287600.0,
                "envFee": 28760.0,
                "taxFee": 14380.0,
                "totalAmount": 330740.0,
                "paymentStatus": 1,
                "paymentStatusLabel": "Chưa thanh toán",
                "oldVal": 626,
                "newVal": 664
            }
                  ]
    },
    "message": "Lấy danh sách hóa đơn thành công",
    "statusCode": 200
}
3.Method Get: http://localhost/api/v1/qlkh/invoices/9383
{
    "data": {
        "monthInvoiceId": 9383,
        "customerId": 2361,
        "yearMonth": "201503",
        "amount": 99200.0,
        "envFee": 9920.0,
        "taxFee": 4960.0,
        "invStatus": 1,
        "paymentStatus": 1,
        "paymentStatusLabel": "Đã thanh toán",
        "createdDate": "20150129",
        "startDate": "",
        "endDate": "",
        "oldVal": 690,
        "newVal": 704,
        "waterMeterSerial": "",
        "numOfHouseHold": 1
    },
    "message": "Lấy chi tiết hóa đơn thành công",
    "statusCode": 200
}
4.Method Get:
    "data": {
        "id": 9383,
        "digiCode": "00800219",
        "customerName": "NGUYỄN HỮU ĐỒNG",
        "amount": 99200.0,
        "envFee": 9920.0,
        "taxFee": 4960.0,
        "totalAmount": 114080.0,
        "paymentStatus": 1,
        "paymentStatusLabel": "Chưa thanh toán",
        "oldVal": 690,
        "newVal": 704
    },
    "message": "Lấy chi tiết hóa đơn thành công",
    "statusCode": 200
}
    thiết kế giao diẹn theo hướng hiện đại, thân thiện với khách hàng và phù hợp với công ty Nước của chúng tôi
    Api của Tra cứu hóa đơn. HÃy viết cho tôi 1 màn hình sau đăng nhập thành công. 
        + Màn hình sau đăng nhập(Mặc định Sẽ hiện thông tin của khách hàng : HIển thị Mã khách hàng(Digicode), name(Tên Khách hàng), phone(Số điện thọại), Address(địa chỉ), Status
        +Hiển thị danh sách hóa đơn, 
            - cho khách hàng tìm kiếm hóa đơn theo kỳ thanh toán(yearMonth))

        + Khi click vao hóa đơn hiện ra thông tin chi tiết của Hóa đơn : CHỉ số cũ , chỉ số mới, 
     Tổng sẽ là giá trị 3 trường này("amount": 99200.0,"envFee": 9920.0,"taxFee": 4960.0, ), kì thanh toán(descho tôi cho tôi nhu 1 hóa đơn thật nhé)

     đọc thêm DB để hiểu thêm :
      CREATE TABLE `customer` (
   `CustomerId` int NOT NULL AUTO*INCREMENT,
   `Name` varchar(200) DEFAULT NULL,
   `ShortName` varchar(50) DEFAULT NULL,
   `Address` varchar(200) DEFAULT NULL,
   `AddressOld` varchar(200) DEFAULT NULL,
   `BudgetRelationOfficeCode` varchar(40) DEFAULT NULL,
   `PassportNumber` varchar(20) DEFAULT NULL,
   `CitizenIdentificationCard` varchar(20) DEFAULT NULL,
   `Phone` varchar(40) DEFAULT NULL,
   `Fax` varchar(40) DEFAULT NULL,
   `Email` varchar(150) DEFAULT NULL,
   `Sms` varchar(16) DEFAULT NULL,
   `ContactName` varchar(70) DEFAULT NULL,
   `Description` varchar(200) DEFAULT NULL,
   `EntryDate` datetime DEFAULT NULL,
   `ExitDate` datetime DEFAULT NULL,
   `BankNo` varchar(80) DEFAULT NULL,
   `BankName` varchar(150) DEFAULT NULL,
   `TaxCode` varchar(20) DEFAULT NULL,
   `Type` int DEFAULT NULL,
   `OrderOnRoad` double DEFAULT NULL,
   `IsActive` tinyint unsigned DEFAULT NULL,
   `IsPayOnline` tinyint unsigned DEFAULT NULL,
   `EnvFee` double DEFAULT NULL,
   `TaxFee` double DEFAULT NULL,
   `ModifiedById` int DEFAULT NULL,
   `ModifiedDate` datetime DEFAULT NULL,
   `Code` varchar(20) DEFAULT NULL,
   `DigiCode` varchar(10) DEFAULT NULL,
   `ContactPhone` varchar(40) DEFAULT NULL,
   `ContactEmail` varchar(80) DEFAULT NULL,
   `PriceSchemaId` int DEFAULT NULL,
   `RoadId` int DEFAULT NULL,
   `Password` varchar(75) DEFAULT NULL,
   `PasswordEncrypted` tinyint unsigned DEFAULT NULL,
   `PasswordReset` tinyint unsigned DEFAULT NULL,
   `PasswordModifiedDate` datetime DEFAULT NULL,
   `Balance` double DEFAULT NULL,
   `IsSendSMSOverdue` tinyint unsigned DEFAULT NULL,
   `SendSMSOverdueDate` varchar(8) DEFAULT NULL,
   `SendSMSOverdueTimes` int DEFAULT NULL,
   `IsWaterCut` tinyint unsigned DEFAULT NULL,
   `WaterCutDate` varchar(8) DEFAULT NULL,
   `OldCode` varchar(20) DEFAULT NULL,
   `WaterCutOrderNum` varchar(40) DEFAULT NULL,
   `HasInstallContract` tinyint unsigned DEFAULT NULL,
   `HasSupplyContract` tinyint unsigned DEFAULT NULL,
   `Reserve1` varchar(100) DEFAULT NULL,
   `Reserve2` varchar(100) DEFAULT NULL,
   `Reserve3` varchar(100) DEFAULT NULL,
   `Reserve4` varchar(100) DEFAULT NULL,
   `Reserve5` varchar(100) DEFAULT NULL,
   `BalanceDate` varchar(14) DEFAULT NULL,
   `Status` int DEFAULT NULL,
   `SmsDate` datetime DEFAULT NULL,
   PRIMARY KEY (`CustomerId`),
   KEY `R_17` (`PriceSchemaId`),
   KEY `R_19` (`RoadId`),
   CONSTRAINT `R_17` FOREIGN KEY (`PriceSchemaId`) REFERENCES `supportingtable` (`SupportingTableId`),
   CONSTRAINT `R_19` FOREIGN KEY (`RoadId`) REFERENCES `supportingtable` (`SupportingTableId`)
   ) ENGINE=InnoDB AUTO_INCREMENT=13612 DEFAULT CHARSET=utf8mb3;
   /*!40101 SET character*set_client = @saved_cs_client */;

--
-- Table structure for table `monthinvoice`
--

DROP TABLE IF EXISTS `monthinvoice`;
/_!40101 SET @saved_cs_client = @@character_set_client _/;
/_!50503 SET character_set_client = utf8mb4 _/;
CREATE TABLE `monthinvoice` (
`MonthInvoiceId` int NOT NULL AUTO*INCREMENT,
`RootKey` varchar(30) DEFAULT NULL,
`Fkey` varchar(36) DEFAULT NULL,
`InvStatus` int DEFAULT NULL,
`SupplyingContractId` int DEFAULT NULL,
`CustomerId` int DEFAULT NULL,
`YearMonth` varchar(8) DEFAULT NULL,
`WaterMeterSerial` varchar(20) DEFAULT NULL,
`CreatedDate` varchar(8) DEFAULT NULL,
`StubNum` varchar(20) DEFAULT NULL,
`TimeToUsed` varchar(20) DEFAULT NULL,
`NumOfHouseHold` int DEFAULT NULL,
`Amount` double DEFAULT NULL,
`SentDate` varchar(8) DEFAULT NULL,
`EnvFee` double DEFAULT NULL,
`TaxFee` double DEFAULT NULL,
`ModifiedById` int DEFAULT NULL,
`ModifiedDate` datetime DEFAULT NULL,
`PaymentStatus` int DEFAULT NULL,
`PaymentLineId` mediumtext,
`Status` int DEFAULT NULL,
`Comment` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
`OldVal` int DEFAULT NULL,
`NewVal` int DEFAULT NULL,
`Range1` int DEFAULT NULL,
`Range2` int DEFAULT NULL,
`Range3` int DEFAULT NULL,
`PrintedById` int DEFAULT NULL,
`PrintedDate` datetime DEFAULT NULL,
`RoadId` int DEFAULT NULL,
`OrderOnRoad` double DEFAULT NULL,
`PrintedStatus` int DEFAULT NULL,
`PriceSchemaId` int DEFAULT NULL,
`Reserve1` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
`Reserve2` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
`MaxScale` bigint DEFAULT NULL,
`StartDate` varchar(8) DEFAULT NULL,
`EndDate` varchar(8) DEFAULT NULL,
`BlankNo` varchar(10) DEFAULT NULL,
`IsLastInvoice` tinyint unsigned DEFAULT NULL,
`TemplateCode` varchar(20) DEFAULT NULL,
`Serial` varchar(10) DEFAULT NULL,
`SignedDate` datetime DEFAULT NULL,
`RecordById` int DEFAULT '0',
`SmsDate` datetime DEFAULT NULL,
`SmsOut` int DEFAULT NULL,
PRIMARY KEY (`MonthInvoiceId`),
KEY `R_11` (`SupplyingContractId`),
KEY `R_12` (`YearMonth`),
KEY `R_13` (`RoadId`),
KEY `R_14` (`YearMonth`,`RoadId`),
KEY `R_C_C_I_P` (`CustomerId`,`CreatedDate`,`InvStatus`,`PaymentStatus`)
) ENGINE=InnoDB AUTO_INCREMENT=803200 DEFAULT CHARSET=latin1;
/*!40101 SET character*set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/_!40101 SET @saved_cs_client = @@character_set_client _/;
/_!50503 SET character_set_client = utf8mb4 _/;
CREATE TABLE `payment` (
`PaymentId` int NOT NULL AUTO_INCREMENT,
`YearMonth` varchar(8) DEFAULT NULL,
`PaymentNum` varchar(20) DEFAULT NULL,
`TotalAmount` double DEFAULT NULL,
`NumCustomers` int DEFAULT NULL,
`PaidDate` varchar(14) DEFAULT NULL,
`BankId` mediumtext,
`EmployeeId` mediumtext,
`RoadId` mediumtext,
`Remarks` varchar(100) DEFAULT NULL,
`Status` int DEFAULT NULL,
`ModifiedById` mediumtext,
`ModifiedDate` datetime DEFAULT NULL,
PRIMARY KEY (`PaymentId`)