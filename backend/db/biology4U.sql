-- DROP DATABASE IF EXISTS Biology4U;
CREATE DATABASE Biology4U;

CREATE TABLE User (
	id int primary key auto_increment,
    username varchar(200) not null,
    user_password varchar(200) not null,
    email varchar(200) not null,
    firstname varchar(200) not null,
    lastname varchar(200) not null,
    user_type enum("admin", "teacher", "student")
);

CREATE TABLE Topics (
	id int primary key auto_increment,
    topic_name varchar(200) not null,
    content text not null
);

CREATE TABLE SubTopics (
	id int primary key auto_increment,
    sub_topic_name varchar(200) not null,
    content text not null,
    
    topic_id int not null,
    
    foreign key (topic_id) references Topic(id)
);

CREATE TABLE Questions (
	id int primary key auto_increment,
    question_name varchar(100) not null,
    correct_answer varchar(100) not null,
    incorrect_answer1 varchar(100) not null,
    incorrect_answer2 varchar(100) not null,
    incorrect_answer3 varchar(100) not null,
    
    sub_topic_id int not null,
    
    foreign key(sub_topic_id) references SubTopics(id)
);

CREATE TABLE Comments (
	id int primary key auto_increment,
    content varchar(1000) not null,
    
    user_id int not null,
    sub_topic_id int not null,
    
    foreign key (user_id) references User(id),
    foreign key (sub_topic_id) references SubTopics(id)
);

CREATE TABLE TestResults (
	id int primary key auto_increment,
    test_score int not null,
    
    topic_id int not null,
    user_id int not null,
    
    foreign key (topic_id) references Topic(id),
    foreign key (user_id) references User(id)
);

CREATE TABLE AdditionalFiles(
	id int primary key auto_increment,
    path_name varchar(300) not null unique,
    filename varchar(200) not null,
    
    sub_topic_id int not null,
    user_id int not null,
    
    foreign key (sub_topic_id) references SubTopic(id),
    foreign key (user_id) references User(id)
);

INSERT INTO User(username, user_password, email, firstname, lastname, user_type) VALUES ("john1", "password1", "john@gmail.com", "John", "Dou", "student");

SELECT * FROM User;

SELECT * FROM User

#sequelize