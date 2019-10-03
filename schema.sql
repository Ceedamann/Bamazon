DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE Table products(
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (255) NOT NULL,
    department_name VARCHAR (255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    PRIMARY KEY (id)
);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Xbox One", "Video Games", 249.99, 10);
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Laptop", "Computers", 799.99, 10);
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Xbox One X", "Video Games", 399.99, 10);
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Playstation 4", "Video Games", 279.99, 10);
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Playstation 4 Pro", "Video Games", 399.99, 10);
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("iPhone XR", "Cellphones", 599.99, 10);
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Jordan Retro 3 Tinker Edition", "Sneakers", 219.99, 10);
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Pop-Figures", "Toys", 14.99, 10);
