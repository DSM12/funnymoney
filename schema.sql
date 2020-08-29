DROP DATABASE IF EXISTS funnymoney;
CREATE DATABASE funnymoney;

use funnymoney;

create table account(
	account_id int not null auto_increment,
    account_name varchar(30) not null,
    account_password varchar(100) not null,
    account_email varchar(100) not null,
    account_phone int(10) not null,
    persons_name varchar(100) not null,
    primary key (account_id)
    );