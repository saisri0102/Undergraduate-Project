DROP DATABASE mytraindb;
CREATE DATABASE mytraindb;

\c mytraindb;

DROP TABLE train;
CREATE TABLE train(
id varchar(5) primary key,
name varchar(20) not null unique
);

DROP TABLE train_halts;
CREATE TABLE train_halts(
id varchar(5) not null,
seqno integer not null,
stcode varchar(10) not null,
time_in varchar(5),
time_out varchar(5)
);

DROP TABLE track;
CREATE TABLE track(
stcode1 varchar(10),
stcode2 varchar(10),
distance integer
);

DROP TABLE station;
CREATE TABLE station(
stcode varchar(10) primary key,
name varchar(10)
);

insert into train values ('KP11','CST-KYN');
insert into train values ('KP11L','CST-KYN_LOCAL');
insert into train values ('T129','CST-TNA_LOCAL');
insert into train values ('A63','CST-DL_LOCAL');
insert into train values ('K101','CST-KYN_LOCAL');
insert into train values ('N27','CST-TNA_LOCAL');
insert into train values ('S33','CST-KGR_LOCAL');
insert into train values ('A65','CST-AMR_LOCAL');

insert into  train_halts(id, seqno, stcode,time_out) values ('KP11',0,'CST','20.23');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',1,'BYC','20.31','20.32');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',2,'DR','20.41','20.42');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',3,'GPR','20.52','20.53');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',4,'GPR','20.52','20.53');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',5,'DR','20.41','20.42');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',6,'GPR','20.58','20.59');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',7,'TNA','21.21','21.22');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('KP11',8,'DL','21.45','21.46');
insert into  train_halts(id, seqno, stcode, time_in) values ('KP11',9,'KYN','21.54');
insert into  train_halts(id, seqno, stcode, time_out) values ('A65',0,'CST','20.52');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('A65',1,'BYC','21','21.01');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('A65',2,'DR','21.1','21.11');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('A65',3,'KRL','21.22','21.23');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('A65',4,'GPR','21.28','21.29');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('A65',5,'TNA','21.49','21.5');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('A65',6,'DL','22.13','22.14');
insert into  train_halts(id, seqno, stcode, time_in, time_out) values ('A65',7,'KYN','22.22','22.23');
insert into  train_halts(id, seqno, stcode, time_in) values ('A65',8,'AMR','22.36');

insert into track values('CST','BYC',5);
insert into track values('CST','DR',9);
insert into track values('CST','KRL',16);
insert into track values('CST','GPR',20);
insert into track values('CST','TNA',34);
insert into track values('CST','DL',49);
insert into track values('CST','KYN',54);
insert into track values('CST','KSR',77);
insert into track values('CST','AMR',65);
insert into track values('BYC','DR',4);
insert into track values('BYC','KRL',11);
insert into track values('GRP','TNA',14);
insert into track values('DR','TNA',25);
insert into track values('KRL','KYN',38);
insert into track values('TNA','KYN',20);
insert into track values('TNA','KSR',43);

insert into station values('CST','MUMBAI');
insert into station values('BYC','BYCULLA');
insert into station values('DR','DADAR');
insert into station values('KRL','KURLA');
insert into station values('GPR','GHATKOPAR');
insert into station values('TNA','THANE');
insert into station values('DL','DOMBIVALI');
insert into station values('AMR','AMBARNATH');
insert into station values('KYN','KALYAN');
insert into station values('KSR','KASARA');

select * from track where distance < 20;

select train.id 
from train, train_halts, station
where train.id = train_halts.id 
AND station.stcode = train_halts.stcode 
AND station.name = 'THANE';

select train.name
from train, train_halts, station
where train.id = train_halts.id 
AND station.stcode = train_halts.stcode 
AND train_halts.seqno = 0 
AND station.name= 'MUMBAI';

select station.name
from train, train_halts, station
where train.id = train_halts.id 
AND station.stcode = train_halts.stcode 
AND train.name = 'CST-AMR_LOCAL'
ORDER BY train_halts.seqno;

select train.name
from train, train_halts, station
where train.id = train_halts.id 
AND station.stcode = train_halts.stcode 
AND station.name = 'THANE' 
AND train_halts.seqno < 6;
