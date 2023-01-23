CREATE DATABASE wishlist;

CREATE TABLE movies (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "platform" VARCHAR(255) NOT NULL,
    "genre" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "notes" TEXT
);
