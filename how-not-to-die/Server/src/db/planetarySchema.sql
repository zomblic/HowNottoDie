DROP DATABASE IF EXISTS planets;
CREATE DATABASE planet;  
  
\c planets;

CREATE TABLE planet (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    hostility VARCHAR(15) NOT NULL,
    exploration INT NOT NULL
    
);

CREATE TABLE landingspot (
  
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    flora VARCHAR(50) NOT NULL,
    fauna VARCHAR(50) NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);

CREATE TABLE flora (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);


CREATE TABLE fauna (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);

CREATE TABLE unexplained (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    planet_id INT NOT NULL,
    FOREIGN KEY (planet_id) REFERENCES planet(id) ON DELETE CASCADE
);