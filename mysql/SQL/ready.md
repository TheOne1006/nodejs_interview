### 准备

> table1 西天取经四人组

| id | user_name |
|----|-----------|
| 1  | 唐僧       |
| 2  | 猪八戒     |
| 3  | 孙悟空     |
| 4  | 沙僧       |

> table2 孙悟空和他的朋友们

| id | user_name |
|----|-----------|
| 1  | 孙悟空     |
| 2  | 牛魔王     |
| 3  | 蛟魔王     |
| 4  | 鹏魔王     |
| 5  | 狮驼王     |

> table3 四人组每人的打怪数量

| id | user_id | timestr             | kills |
|----|---------|---------------------|-------|
|  1 |       2 | 2013-01-10 00:00:00 |    10 |
|  2 |       2 | 2013-02-01 00:00:00 |     2 |
|  3 |       2 | 2013-02-05 00:00:00 |    12 |
|  4 |       4 | 2013-01-10 00:00:00 |     3 |
|  5 |       4 | 2013-02-11 00:00:00 |     5 |
|  6 |       2 | 2013-02-06 00:00:00 |     1 |
|  7 |       3 | 2013-01-11 00:00:00 |    20 |
|  8 |       2 | 2013-02-12 00:00:00 |    10 |
|  9 |       3 | 2013-02-07 00:00:00 |    17 |

```sql
create database demo;
use demo;


-- 新建 user1 表
DROP TABLE IF EXISTS user1;
create table if not exists user1 (
  id smallint unsigned primary key auto_increment,
  user_name varchar(40),
  over varchar(40)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 新建 user2 表
create table if not exists user2 (
  id smallint unsigned primary key auto_increment,
  user_name varchar(40),
  over varchar(40)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 新建 user_kills 表
create table if not exists user_kills (
  id smallint unsigned primary key auto_increment,
  user_id smallint unsigned,
  timestr timestamp default CURRENT_TIMESTAMP,
  kills smallint unsigned
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 插入 user1 表数据
insert into user1(user_name,over) values ('唐僧', '旃檀功德佛');
insert into user1(user_name,over) values ('猪八戒', '净坛使者');
insert into user1(user_name,over) values ('孙悟空', '斗战胜佛');
insert into user1(user_name,over) values ('沙僧', '金身罗汉');
-- 插入 user2 表数据
insert into user2(user_name,over) values ('孙悟空', '成佛');
insert into user2(user_name,over) values ('牛魔王', '被降服');
insert into user2(user_name,over) values ('蛟魔王', '被降服');
insert into user2(user_name,over) values ('鹏魔王', '被降服');
insert into user2(user_name,over) values ('狮驼王', '被降服');
-- 插入 user_kills 表数据
insert into user_kills(user_id, timestr, kills) values (2, timestamp('2013-01-10'), 10);
insert into user_kills(user_id, timestr, kills) values (2, timestamp('2013-02-01'), 2);
insert into user_kills(user_id, timestr, kills) values (2, timestamp('2013-02-05'), 12);
insert into user_kills(user_id, timestr, kills) values (4, timestamp('2013-01-10'), 3);
insert into user_kills(user_id, timestr, kills) values (4, timestamp('2013-02-11'), 5);
insert into user_kills(user_id, timestr, kills) values (2, timestamp('2013-02-06'), 1);
insert into user_kills(user_id, timestr, kills) values (3, timestamp('2013-01-11'), 20);
insert into user_kills(user_id, timestr, kills) values (2, timestamp('2013-02-12'), 10);
insert into user_kills(user_id, timestr, kills) values (3, timestamp('2013-02-07'), 17);

```
