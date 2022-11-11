DROP DATABASE IF EXISTS Biology4U;
CREATE DATABASE Biology4U;

CREATE TABLE User (
	id int primary key unique,
    username varchar(200) not null,
    user_password varchar(200) not null,
    email varchar(200) not null
);

CREATE TABLE Topics (
	id int primary key unique,
    topic_name varchar(200) not null,
    content text not null
);

CREATE TABLE Questions (
	id int primary key unique,
    question_name varchar(100) not null,
    answer varchar(100) not null
    #reference key (topic_id) references Topics(id)
);

CREATE TABLE Comments (
	id int primary key unique,
    content varchar(1000) not null
    #reference key (user_id) references User(id)
);
#sequelize