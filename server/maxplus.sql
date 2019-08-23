SET NAMES UTF8;
DROP DATABASE IF EXISTS maxplus;
CREATE DATABASE maxplus CHARSET=UTF8;
USE maxplus;
-- 用户
CREATE TABLE max_user(
    uid INT,
    steam_id INT(12),
    uname VARCHAR(24),
    upwd VARCHAR(24),
    email VARCHAR(64),
    phone VARCHAR(16),
    avatar VARCHAR(128),
    user_name VARCHAR(24),
    gender INT
);
insert into max_user values(1,185454478799,"《情商》","123qwe456","123456@qq.com","18923456789","image/paishou.jpg","黄浦江",1);
CREATE TABLE max_site_info(
    site_name VARCHAR(24),
    logo VARCHAR(128),
    copyright VARCHAR(128)
);
-- 导航
CREATE TABLE max_anvbar(
    nav_name VARCHAR(32),
    nav_url VARCHAR(64),
    nav_title VARCHAR(64)
);
-- 轮播
CREATE TABLE max_carousel(
    c_id INT,
    c_url VARCHAR(64),
    c_title VARCHAR(64)
);
-- 登录
CREATE TABLE max_login(
    img_id INT PRIMARY KEY AUTO_INCREMENT,
    log_bg VARCHAR(128)
);
INSERT INTO max_login VALUES(1,"image/hero.jpg");
INSERT INTO max_login VALUES(2,"image/shadow.jpg");
INSERT INTO max_login VALUES(3,"image/shadow_02.jpg");
INSERT INTO max_login VALUES(4,"image/assasion.jpg");
INSERT INTO max_login VALUES(5,"image/urea.jpg");
INSERT INTO max_login VALUES(null,"image/rubick.jpg");
--直播
CREATE table max_live(
    live_id INT,
    live_pic varchar(256),
    liver varchar(32),
    live_title varchar(64),
    liver_pic varchar(128),
    eyes_number INT,
    live_add varchar(32)
);
INSERT INTO max_live VALUES(1,"image/dy2.jpg","Sumiya、墨岩彧","直播","image/live/sumiya.jpg",245678,"https://www.douyu.com/88660");
-- 商城
CREATE TABLE max_shop(
    sp_id INT,
    sp_pic varchar(128),
    sp_name varchar(64),
    sp_price varchar(32)
);
-- 联赛
CREATE TABLE max_league(
    lg_id INT,
    lg_pic varchar(64),
    lg_add varchar(64)
);
-- 数据直播
CREATE TABLE max_data_live(
    match_id INT,
    match_add varchar(64)
);
-- 战队
CREATE TABLE max_team(
    team_id INT,
    team_name varchar(24),
    team_pic varchar(128),
    team_carry varchar(24),
    team_carry_pic varchar(128),
    team_solo varchar(24),
    team_solo_pic varchar(128),
    team_offlane varchar(24),
    team_offlane_pic varchar(128),
    team_support_1 varchar(24),
    team_support_1_pic varchar(128),
    team_support_2 varchar(24),
    team_support_2_pic varchar(128),
    team_coach varchar(24),
    team_coach_pic varchar(128),
    team_country varchar(256)
);