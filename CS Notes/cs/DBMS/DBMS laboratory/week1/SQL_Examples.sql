\echo

\c firstlab

/* Examples of querying a relational database management
   system using SQL - Structured Query Language. SQL is
   pronounced as "sequel". 

   Review the tables available for querying:

firstlab=# \d
                   List of relations
 Schema |          Name           |   Type   |  Owner   
--------+-------------------------+----------+----------
 public | departments             | table    | postgres
 public | prod_dept_v             | view     | postgres
 public | products                | table    | postgres
 public | sales_detail            | table    | postgres
 public | sales_detail_dtl_id_seq | sequence | postgres
 public | sales_header            | table    | postgres
 public | sample                  | table    | postgres
 public | stores                  | table    | postgres

 */

/* What is the sales for the dates we have data for? 

   sales_detail has quantity, price and discount (amount).

   So sales = quantity X price - discount
*/

select txn_date Date, 
       sum(quantity * price - discount) Sales
from sales_header a, sales_detail b
where a.txn_id = b.txn_id
group by txn_date
order by txn_date;

/* What is the sales for the departments? 

   Product belongs to a department.

   prod_id is there in both sales_detail and products.

   products and departments are linked by dept_id
*/

select dept_name Department,
       sum(quantity * price - discount) Sales
from sales_header a, sales_detail b,
     products c, departments d
where a.txn_id = b.txn_id
  and b.prod_id = c.prod_id
  and c.dept_id = d.dept_id
group by dept_name
order by dept_name;

/* Order by amount to get sorted list of departments by sales */

/* Perform a similar querry on stores */

/* Many more questions can be answered by just 
   running SQL commands on the tables.
 */

