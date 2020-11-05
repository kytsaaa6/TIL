-- spring5 계정 생성(암호로 spring5 사용)
create user 'spring5'@'localhost' identified by 'spring5';

-- spring5fs DB 생성
create database spring5fs character set=utf8;

-- spring5fs DB에 spring5 계정 접근 권한 부여
grant all privileges on spring5fs.* to 'spring5'@'localhost';

-- MEMBER 테이블 생성
create table spring5fs.MEMBER (
    ID int auto_increment primary key,
    EMAIL varchar(255),
    PASSWORD varchar(100),
    NAME varchar(100),
    REGDATE datetime,
    unique key (EMAIL) 
) engine=InnoDB character set = utf8;
