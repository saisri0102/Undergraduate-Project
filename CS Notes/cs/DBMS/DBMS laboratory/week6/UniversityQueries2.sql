\c mypesudb

/* QUERY 1 */
select course_id, title 
from course 
where course_id not in (select course_id from prereq);

/* QUERY 2 */
select distinct name 
from student
where ID not in (select student.ID 
				from course, takes ,student 
				where course.dept_name = 'Biology' 
				and course.course_id= takes.course_id
				and student.ID = takes.ID);

/* QUERY 3 */
select * from instructor;
Update instructor
set salary = 1.1 * salary;
select * from instructor;

/* QUERY 4 */
select * from student;
update student
set tot_cred = tot_cred + (select credits from course where title = 'Genetics')
where ID in( select student.ID from course,takes,student
				where course.title = 'Genetics'
				and course.course_id= takes.course_id
				and student.ID = takes.ID); 
select * from student;

/* QUERY 5 */
select * from instructor;
Update instructor
set salary = salary+50000
where ID in (select ID from instructor,advisor group by instructor.ID, i_ID having i_ID = ID AND count(s_id)>=2);
select * from instructor;

/* QUERY 6 */
select * from course;
update course
set credits = 2
where course_id not in(
	select course_id
	from takes
	group by course_id
	having count(ID) >=5);
select * from course;
