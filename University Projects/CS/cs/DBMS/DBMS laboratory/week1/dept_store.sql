\echo
/* connect to the database */

\c firstlab

/* Departments in a department store */
drop table departments;

create table departments(
dept_id integer not null primary key,  /* id: a sequence number */
dept_name varchar(30)
);

/* Products in department store */
drop table products;

create table products(
prod_id integer not null primary key,
prod_name varchar(30) not null,
dept_id integer not null);

/* Store and locations */

drop table stores;

create table stores(
store_id integer not null primary key,
store_location varchar(30) not null,
store_manager varchar(30),
store_address varchar(100),
store_city varchar(15),
store_pin_code varchar(10));

/* all sales transactions stored in two tables:
   header : containing date of transaction
   detail : containing all the items purchased in
            one receipt
 */
drop table sales_header;

create table sales_header(
txn_id integer not null primary key,
store_id integer not null,
txn_date date);

drop table sales_detail;

create table sales_detail(
txn_id integer not null,
dtl_id SERIAL not null,
prod_id integer not null,
quantity integer not null,
price numeric(12,2),
discount numeric(12,2),
primary key (txn_id, dtl_id));

/* Example of a "view"
   Combining products and departments
   This "view" lists all the departments
   of the department store and all the products
 */

drop view prod_dept_v;

create view prod_dept_v as
select dept.dept_id, dept_name, prod_id, prod_name
from departments dept, products prod
where dept.dept_id = prod.dept_id;

/* Review

   You have so far
	1. Created a set of tables for a department store
           example.
		a. departments
		b. products
		c. stores
		d. sales_header
		e. sales_detail

   Observe:
	1. Data types for columns
	2. Some key words like not null, primary key, SERIAL
		a. not null: you cannot keep this "empty"
		b. primary key: this uniquely identifies a row.
		c. SERIAL: a sequential number is generated
	3. Some entities are made up of one table
		a. departments, products, stores
	4. Some entities are made up of more than one table
		b. sales_header and sales detail for transaction
	5. A "view" combines data from more than one table

   End of lesson on tables and views.
 */


