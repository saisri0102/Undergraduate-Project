/* This command \echo displays the SQL statements 
   If it is not there, the sql statements are not 
   displayed.
 */

\echo

/* These statements creates a database for the firstlab */
DROP DATABASE firstlab;

CREATE DATABASE firstlab;

/* This statement cconnects to the firstlab database */
\c firstlab

/* Create tables for the firstlab */
DROP TABLE sample;

/* Create a "table" to hold some records 
   This table has records with two attributes (or columns)
   An attribute called 'id' of data type integer
   and attribute called 'name' of data type varchar
   varchar is short for variable length character string
 */
CREATE TABLE sample(
	id integer not null,
	name varchar(50)
);

/* insert some data into the table */
insert into sample (id, name) 
values (1, 'student-1');

insert into sample (id, name) 
values (2, 'student-2');

insert into sample (id, name) 
values (3, 'student-3');

/* Show the data in the table */
select * /*  * means all the columns */
from sample;

select id, name  /* select only columns of interest */
from sample;

select id
from sample;

select name
from sample;

/* Change the data in the table */
update sample
set name = 'Hari'
where id = 1;

select * 
from sample;

/* Why is the order of records displayed different? */
select * 
from sample
order by id;

/* Update all the names */
update sample
set name = 'Ananth'
where id = 2;

update sample
set name = 'Parameshwar'
where id = 3;

/* Order by any column */
select * 
from sample
order by id;

select * 
from sample
order by name;

/* Review

   You have so far
	1. Created a database using create database statement
	2. Connected to it using \c command
	3. Created a table using create table statement
	4. Created some data using insert into stament
	5. Displayed the data using select statement
	6. Used order by clause to "print" in sort order
	7. Updated the data using update statement

   Observe:
	1. Some commands start with \ (backslash)
	2. Some statements end with a ; (semicolon)

   psql is a command line utility to interact with the
   postgresql database management system.

   \h will list the available SQL statements
   \? will list the psql commands

   End of basic lesson.
 */


