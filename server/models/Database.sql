create DATABASE company;

create Table products
(
     ID  SERIAL PRIMARY KEY,
     title varchar(255) not null unique,
     descriptio varchar(255),
      image_name varchar DEFAULT NULL,
     price INT,
     email varchar(255) not null,
     quantity INT DEFAULT 0
);
/*


title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    */