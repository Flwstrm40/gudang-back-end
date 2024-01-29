-- create_user_table.sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  displayName VARCHAR(255),
  role VARCHAR(255) NOT NULL
);

ALTER TABLE users
ADD profilePhoto VARCHAR(255) null;
