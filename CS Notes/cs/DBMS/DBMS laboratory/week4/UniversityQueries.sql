\c mypesudb

select name 
from student 
where tot_cred> 100;

select course_id, grade 
from takes, student
where student.name = 'Tanaka' AND takes.id = student.id;

/*METHOD 1*/
select distinct instructor.ID, name 
from instructor, teaches, course
where instructor.ID = teaches.ID AND course.dept_name = 'Comp. Sci.' AND teaches.course_id = course.course_id;

/*METHOD 2*/
select ID, name
from instructor
where ID in (Select instructor.ID from instructor, teaches, course
where instructor.ID = teaches.ID AND course.dept_name = 'Comp. Sci.' AND teaches.course_id = course.course_id);

/*METHOD 1*/
select s1.course_id
from section as s1, section as s2
where s1.semester = 'Fall' AND s2.semester = 'Spring' AND s1.course_id = s2.course_id;

/*METHOD 2*/
select course_id from section where semester = 'Spring'
INTERSECT
select course_id from section where semester = 'Fall';

select name 
from instructor
where dept_name = 'Comp. Sci.';

select course.course_id, title
from course, instructor, teaches
where teaches.course_id = course.course_id AND instructor.name = 'Srinivasan' AND instructor.ID = teaches.ID;

select distinct name
from instructor, teaches
where instructor.ID = teaches.ID AND teaches.semester = 'Spring' AND teaches.year = 2009;
