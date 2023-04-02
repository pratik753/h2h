create DATABASE company;

create Table Doctor
(
     reimbersement varchar not null,
     dat varchar(255) not null,
     email varchar(255)  not null,
     item varchar[],
     img varchar[],
     ID1  SERIAL PRIMARY KEY
);