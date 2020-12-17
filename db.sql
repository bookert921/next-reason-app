-- CREATE DATABASE books_blog;

\c books_blog;

CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE comments (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    post_id BIGINT NOT NULL REFERENCES posts(id),
    content TEXT NOT NULL
);