\echo
\c firstlab

/* Write a SQL statement to create a simple table countries, including
columns country_id, country_name and region_id.*/
drop table countries;

create table countries(
country_id integer,
country_name varchar(50),
region_id integer
);

/*Write a sql statement to create the structure of a table
dup_countries similar to countries.*/
drop table dup_countries;

create table dup_countries(
country_id integer,
country_name varchar(50),
region_id integer
);

/*Write a SQL statement to create a table named jobs, including
job_id, job_title, min_salary and max_salary, and make sure that,
the default value for job_title is blank and min_salary is 8000 and
max_salary is NULL will be entered automatically at the time of
insertion if no value assigned for the specified columns.*/
drop table jobs;

create table jobs(
job_id integer,
job_title varchar(50) default '',
min_salary integer default 8000,
max_salary integer NULL
);

/*Write a SQL statement to create a table named countries, including
columns country_id, country_name and region_id and make sure
that the country_id column will be a key field which will not
contain any duplicate data at the time of insertion. */
drop table countries2;

create table countries2(
country_id integer unique,
country_name varchar(50),
region_id integer
);

