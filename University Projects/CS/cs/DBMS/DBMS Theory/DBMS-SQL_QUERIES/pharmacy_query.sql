/*simple queries*/

select distinct cust_fname,cust_lname from customer,cashier where(cust_lname=cashier_name);
select distinct cust_fname,cust_lname from customer,cashier,supplier where(cashier_sex='F' and suppl_sex=cashier_sex and gender=suppl_gender);
select distinct cust_fname,cust_lname,cost from customer,bill,supplier where(cust_address=address and suppl_id='SUPPL9876');
select distinct cust_fname,cust_lname from customer,prescription where(customer_name=cust_fname and drug_name='codeine');
select drug from stock where(expiry_date<'22/03/2019');
select distinct admin_fname,admin_lname from administrator,cashier,supplier where(suppl_gender='F' and cashier_sex=suppl_gender and admin_id=admin_id_no);
select distinct cust_fname,cust_lname from customer,bill where(bill_date IS NULL and address=cust_address);
select distinct drug from stock EXCEPT select distinct drug_name from prescription;
select COUNT(*) from stock where(expiry_date<'22/03/2019');
select SUM(Cost) from bill ;

/*complex queries*/

select cust_fname,cust_lname from customer,bill where(address=cust_address and Cost=(select MAX(Cost) from bill));
select P.customer_name,B.cost from prescription as P,bill as B,customer as C where((P.Order_date between '2019-02-01' and '2019-02-28')and P.customer_name=C.cust_fname and C.cust_address=B.address);
select SUM(cost) from prescription as P,bill as B,customer as C where((P.Order_date between '2019-02-01' and '2019-02-28')and P.customer_name=C.cust_fname and C.cust_address=B.address);
select cust_fname,cust_address,cost from customer,bill where(cash_id='CASHIER1002' and suppl_id='SUPPL2081' and address=cust_address);
select distinct cust_fname,cust_lname from customer right join bill on (select address from bill where cost>100);
select cust_fname,cust_address from customer,bill where(address=cust_address) and cust_fname,cust_address NOT IN (select cust_fname,cust_address from customer,bill where(address=cust_address and bill_date is NULL));
select C.cust_fname,C.gender,C.age from customer as C where C.gender='F' UNION select C.cust_fname,C.gender,C.age from customer as C where C.age between 30 and 40;
select C.cust_fname,C.cust_address from bill as B left join customer as C on (bill_date IS NULL and B.address=C.cust_address);


select  distinct s.drug,p.drug_quantity,s.quantity from stock as s inner join prescription as p where (p.drug_quantity<s.quantity and p.stock_id=s.stock_id);