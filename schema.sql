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
    VALUES ("Xbox", "Electronics", 189.99, 10)