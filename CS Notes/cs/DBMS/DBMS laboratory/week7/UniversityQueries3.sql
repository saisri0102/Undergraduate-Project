\c mypesudb
/* QUERY 1 */
drop table assistants;
create table assistants
(
	course_id		varchar(8), 
	sec_id			varchar(8),
	semester		varchar(6),	
	year			numeric(4,0) check (year > 1998 and year < 2100), 
	assistant1_id		varchar(10),
	assistant2_id		varchar(10),
	assistant3_id		varchar(10),
	primary key (course_id, sec_id, semester, year),
	foreign key (course_id, sec_id, semester, year) references section,
	foreign key (assistant1_id) references student,
	foreign key (assistant2_id) references student,
	foreign key (assistant3_id) references student
);

/*QUERY 2 
alter table advisor
delete column i_ID;
create table advinst
(
	s_ID			varchar(5) primary key,
	i1_id		varchar(10),
	i2_id		varchar(10),
	i3_id		varchar(10),
	i4_id		varchar(10),
	i5_id		varchar(10),
	i6_id		varchar(10),
	foreign key (i1_id) references instructor,
	foreign key (i2_id) references instructor,
	foreign key (i3_id) references instructor,
	foreign key (i4_id) references instructor,
	foreign key (i5_id) references instructor,
	foreign key (i6_id) references instructor,
); */

/* QUERY 3 */
/*insert into advisor values ('12345', '12121');
insert into advisor values ('12345', '76766');
insert into advisor values ('98988', '98345');
insert into advisor values ('98988', '32343');
insert into advisor values ('98988', '10101');*/
Select s_id,count(*) from advisor
group by s_id
having count(s_id) > 3;

/*QUERY 4 */
select distinct student.ID from student,advisor,instructor
where student.ID = advisor.s_id
AND advisor.i_id = (select ID from instructor where instructor.name = 'Srinivasan')
INTERSECT
select distinct student.ID from student,advisor,instructor
where student.ID = advisor.s_id
AND advisor.i_id = (select ID from instructor where instructor.name = 'Ashok');

/*QUERY 5*/
select DISTINCT a.s_id 
from advisor a, instructor b, student c
where a.i_id=b.ID 
and a.s_id=c.ID 
and b.dept_name!=c.dept_name ;

/*QUERY 6*/
delete from section
where (select(extract(year from current_date) -  year) > 10);
delete from takes
where ( select(extract(year from current_date) -  year) > 10);
delete from teaches
where ( select(extract(year from current_date) -  year) > 10);

/*QUERY 7*/
delete from course
where course_id = 'CS-101';

alter table prereq
add constraint fk2 foreign key(prereq_id) references course on delete cascade;
select * from course;
select * from prereq;
