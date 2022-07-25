/*QUERY 1*/
select name from student where tot_credit > 100;
/*QUERY 2*/
select course_id. grade from takes, student where takes.ID = student.ID and student.name = 'Tanaka';
/*QUERY 3*/
select distinct instructor.name, instructor.ID from instructor, course, teaches 
where teaches.ID = instructor.ID and course.dept_name = 'Comp. Sci' and teaches.course_id = course.course_id;
/*QUERY 4*/
select s1.course_id from section as s1, section as s2 where s1.semester = 'Fall'and s2.semester= 'Spring'and s1.course_id = s2.course_id;
/*QUERY 5*/
select name from instructor where dept_name = 'Comp. Sci';
/*QUERY 6*/
select course.course_id, title from course, instructor, teaches
where teaches.course_id = course.course_id and instructor.name = 'Srinivasan' and instructor.ID = teaches.ID;
/*QUERY 7*/
select distinct name from instructor, teaches
where instructor.ID = teaches.ID and teaches.semester = 'Spring' and teaches.year = 2009; 
