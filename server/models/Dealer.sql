create DATABASE company;
create Table Dealer
(
     dealeremail varchar(255) not null unique,
     nam varchar(255) not null,
     email varchar(255) not null,
     position varchar(255)  not null,
     commission INT
);