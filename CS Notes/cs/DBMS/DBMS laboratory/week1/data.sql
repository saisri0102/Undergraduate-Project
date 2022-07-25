/* connect to the database */

\c firstlab

/* Insert some data into the dapartments table */

insert into departments (dept_id, dept_name)
values (1, 'Grocery');

insert into departments (dept_id, dept_name)
values (2, 'Fresh Produce');

insert into departments (dept_id, dept_name)
values (3, 'Kitchen Utensils');

insert into departments (dept_id, dept_name)
values (4, 'Appliances');

select *
from departments;

/* Insert some data into the products table */
insert into products (prod_id, prod_name, dept_id)
values (1, 'Rice', 1);

insert into products (prod_id, prod_name, dept_id)
values (2, 'Wheat', 1);

insert into products (prod_id, prod_name, dept_id)
values (3, 'Horse Gram', 1);

insert into products (prod_id, prod_name, dept_id)
values (4, 'Flour', 1);

insert into products (prod_id, prod_name, dept_id)
values (5, 'Tomato', 2);

insert into products (prod_id, prod_name, dept_id)
values (6, 'Carrot', 2);

insert into products (prod_id, prod_name, dept_id)
values (7, 'Beet Root', 2);

insert into products (prod_id, prod_name, dept_id)
values (8, 'Beans', 2);

insert into products (prod_id, prod_name, dept_id)
values (9, 'Cooker', 3);

insert into products (prod_id, prod_name, dept_id)
values (10, 'Frying Pan', 3);

insert into products (prod_id, prod_name, dept_id)
values (11, 'Plate', 3);

insert into products (prod_id, prod_name, dept_id)
values (12, 'Spoon', 3);

insert into products (prod_id, prod_name, dept_id)
values (13, 'Microwave', 4);

insert into products (prod_id, prod_name, dept_id)
values (14, 'Mixer Grinder', 4);

insert into products (prod_id, prod_name, dept_id)
values (15, 'Wet Grinder', 4);

insert into products (prod_id, prod_name, dept_id)
values (16, 'Coffee Maker', 4);

select * 
from products;

select * 
from departments;

select * 
from prod_dept_v;

insert into stores (store_id, store_location)
values (1, 'Banashankari');

insert into stores (store_id, store_location)
values (2, 'Hanumantha Nagara');

insert into stores (store_id, store_location)
values (3, 'Bhuvaneshwari Nagara');

insert into stores (store_id, store_location)
values (4, 'Ramanjaneya Nagara');

insert into stores (store_id, store_location)
values (5, 'Vasanthapura');

select *
from stores;

