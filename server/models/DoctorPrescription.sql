create DATABASE company;

create Table Prescription
(
     title varchar(255) not null unique,
     price INT,
     quantity INT,
     img varchar(255) not null,
     dat DATE not null,
     email varchar(255) unique not null
);
/*
  email is for doctor to uniquely identify it
*/  
