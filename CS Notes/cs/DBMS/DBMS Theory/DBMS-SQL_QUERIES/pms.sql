CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` tinyint(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

CREATE TABLE IF NOT EXISTS `ADMINISTRATOR`(
	`Admin_Fname` VARCHAR(15) NOT NULL,
	`Admin_Lname` VARCHAR(15),
	`Admin_Sex` CHAR(1),
	`Admin_id_no` VARCHAR(10) NOT NULL,
	`Username` varchar(10) NOT NULL,
	`Admin_pw` VARCHAR(10) NOT NULL,
	`Phone_no` INT NOT NULL,
	PRIMARY KEY(`Admin_id_no`)
)ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2;

----------------------------------------------------------------
----------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `cashier` (
  `cashier_id` tinyint(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `staff_id` varchar(10) NOT NULL,
  `postal_address` varchar(20) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `email` varchar(20) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`cashier_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

CREATE TABLE IF NOT EXISTS `CASHIER`(
	`Cashier_id` VARCHAR(12) NOT NULL,
	`Cashier_Name` VARCHAR(15) NOT NULL,
	`Cashier_Sex` CHAR(1),
	`Cashier_Phone` INT NOT NULL,
	`Username` varchar(10) NOT NULL,
	`Cashier_pw` VARCHAR(10) NOT NULL,
	`Admin_id` VARCHAR(10) NOT NULL,
	PRIMARY KEY(Cashier_id),
	FOREIGN KEY(Admin_id)REFERENCES ADMINISTRATOR(Admin_id_no)
)ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6;

-------------------------------------------------------------------
-------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `invoice` (
  `invoice_id` int(5) NOT NULL,
  `customer_name` varchar(30) NOT NULL,
  `served_by` varchar(15) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'Unpaid',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`invoice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `BILL`(
	`Invoice_no` INT NOT NULL,
	`bill_date` DATE,
	`Cost` INT,
	`address` VARCHAR(60) NOT NULL,
	`Cash_ID` VARCHAR(12) NOT NULL,
	`Suppl_id` VARCHAR(9) NOT NULL,
	PRIMARY KEY(Invoice_no),
	FOREIGN KEY(address)REFERENCES CUSTOMER(Cust_Address),
	FOREIGN KEY(Cash_ID)REFERENCES CASHIER(Cashier_id),
	FOREIGN KEY(Suppl_id)REFERENCES SUPPLIER(Supplier_ID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

---------------------------------------------------------------------
---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `prescription` (
  `id` tinyint(5) NOT NULL AUTO_INCREMENT,
  `prescription_id` int(5) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(30) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(6) NOT NULL,
  `postal_address` varchar(20) NOT NULL,
  `invoice_id` tinyint(5) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`prescription_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

CREATE TABLE PRESCRIPTION(
	Prescription_ID VARCHAR(10) NOT NULL,
	Order_date DATE NOT NULL,
	Customer_id VARCHAR(10) NOT NULL,
	Customer_name VARCHAR(15) NOT NULL,
	Drug_name VARCHAR(15) NOT NULL,
	Drug_Quantity INT NOT NULL,
	Cust_Phone INT NOT NULL,
	PRIMARY KEY(Prescription_ID));

----------------------------------------------------------------
----------------------------------------------------------------