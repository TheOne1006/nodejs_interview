## join 从句类型

1. 内连接 INNER
2. 全外连接 FULL OUTER
3. 左外连接 LEFT OUTER
4. 右外连接 RIGHT OUTER
5. 交叉连接 CROSS

### 使用场景

##### 1.内连接

最基础, 把两张表公共的部分寻找出来.

> 案例, 寻找 foo 和 bar 公共的关联

```sql
SELECT user1.`user_name`, user1.`over` as user1Over, user2.`over` as user2Over 
FROM user1 INNER JOIN user2 
ON user1.`user_name` = user2.`user_name`;

```

结果集
```
+-----------+--------------+-----------+
| user_name | user1Over    | user2Over |
+-----------+--------------+-----------+
| 孙悟空    | 斗战胜佛       | 成佛       |
+-----------+--------------+-----------+
```


#### 2. 全外连接 FULL JOIN

实际上是 左连接和右连接的合集.

1. 查询出所有 存在 A 和 B 的记录,如果没有 则用 NULL 填充
    - `SELECT <select_list> FROM TableA A FULL JOIN TableB B ON A.Key = B.Key`
2. 查询出值存在 A 表, 或者 B 表的数据
    - `SELECT <select_list> FROM TableA A FULL JOIN TableB B ON A.Key = B.Key WHERE A.Key IS NULL OR B.Key IS NULL`

> Mysql 并不支持 full join, 如何解决

> UNION ALL

```
SELECT a.user_name , a.over, b.over 
FROM user1 a
LEFT JOIN user2 b
ON a.user_name = b.user_name
UNION ALL 
SELECT b.user_name, b.over, a.over 
FROM user1 a
RIGHT JOIN user2 b
ON a.user_name = b.user_name;
```


    
#### 3. 左外连接 LEFT OUTER JOIN

A, B 两张表左外链接,将会以 A 表为基础, 将包含所有 A 表的结果.

可以查询
1. 存在 A 表,并且 也存在 B 表的数据
    - `SELECT <selct_list> FROM TableA A LEFT JOIN TableB B ON A.Key = B.Key`
2. 只存在 A 表,但不存在 B 表的数据 `WHERE B.key IS NULL`
    - `SELECT <selct_list> FROM TableA A LEFT JOIN TableB B ON A.Key = B.Key WHERE B.KEY IS NULL`
    - 替代 not in
3. 寄存在 A 也存在 B 的交际.
    - `SELECT <selct_list> FROM TableA A LEFT JOIN TableB B ON A.Key = B.Key WHERE B.KEY IS NOT NULL`


>>场景:

1. 取经四人组中那些人不是悟空的结拜兄弟.

```sql
SELECT user1.`user_name` 
FROM user1 
LEFT JOIN user2
ON user1.`user_name` = user2.`user_name`
WHERE user2.`user_name` IS NULL;
```

```
+-----------+
| user_name |
+-----------+
| 唐僧      |
| 猪八戒    |
| 沙僧      |
+-----------+
```

2. 取经四人那些是悟空的结拜兄弟

```sql
SELECT user1.`user_name` 
FROM user1 
LEFT JOIN user2
ON user1.`user_name` = user2.`user_name`
WHERE user2.`user_name` IS NOT NULL;
```

#### 4. 右外连接 LEFT OUTER JOIN

A, B 两张表右外链接,将会以 B 表为基础, 将包含所有 B 表的结果.

基本与 LEFT OUTER JOIN 相反


>> 场景:

1. 悟空的结拜兄弟中那些人没有去取经?

SELECT b.`user_name` 
FROM user1 a
RIGHT JOIN user2 b
ON a.`user_name` = b.`user_name`
WHERE a.`user_name` IS NOT NULL;


#### 5. 交叉连接 CROSS JOIN

交叉连接,又称 笛卡尔连接 或 叉乘,
结果集合为 A * B

> 语法

没有 ON 从句, 没有连接关键词, 无需提供连接关键词

```
SELECT a.`user_name`, a.`over`, b.`user_name`, b.`over` 
FROM user1 a
CROSS JOIN user2 b;
```


## 技巧

### 1. 如何更新包含在 FROM 从句中的表.

情景:

把同时存在`取经四人组` 和 `悟空的兄弟` 中的记录在 `取经四人组` 中的 over 字段更新成 `齐天大圣`.

> SQL 写法
```
UPDATE user1 
SET over='齐天大圣'
WHERE user1.`user_name` IN (
    SELECT a.`user_name` 
    FROM user1 a
    LEFT JOIN user2 b
    ON a.`user_name` = b.`user_name`
);
# ERROR 1093 (HY000): You can't specify target table 'user1' for update in FROM clause
# MySQL 不支持更新在 FROM 从句中的 表
# oracle 支持
```

正确写法
```sql
UPDATE user1 a 
JOIN (
    SELECT b.`user_name`
    FROM user1 a
    INNER JOIN user2 b
    ON a.`user_name` = b.`user_name`
) b ON a.user_name = b.user_name
SET a.over='齐天大圣';
```

### 2. 使用 JOIN 优化子查询

```
SELECT a.`user_name` ,a.`over`,
(SELECT over FROM user2 b WHERE a.`user_name`=b.`user_name`) 
AS over2
FROM user1 a;
```

结果

```
+-----------+-----------------+--------+
| user_name | over            | over2  |
+-----------+-----------------+--------+
| 唐僧      | 旃檀功德佛       | NULL   |
| 猪八戒    | 净坛使者         | NULL   |
| 孙悟空    | 齐天大圣         | 成佛    |
| 沙僧      | 金身罗汉         | NULL   |
+-----------+-----------------+--------+
```

使用 explain 解析任务

```
explain SELECT a.`user_name` ,a.`over`,
(SELECT over FROM user2 b WHERE a.`user_name`=b.`user_name`) 
AS over2
FROM user1 a;
```

使用 LEFT JOIN 优化

```
SELECT a.`user_name`, a.`over`, b.`over` AS over2
FROM user1 AS a
LEFT JOIN user2 AS b
ON a.`user_name` = b.`user_name`;
```

### 3. 使用 join 优化聚合查询

>情景:

如何查询出四人组中打怪最多的日期?

```
SELECT a.`user_name`, b.`timestr`, b.`kills` 
FROM user1 a
JOIN user_kills b
ON a.`id` = b.`user_id` 
WHERE b.kills= (
    SELECT MAX(c.kills) FROM user_kills c WHERE c.`user_id`=b.`user_id`
);
```

尝试使用 group by

```
SELECT a.`user_name`, b.`timestr`, MAX(b.`kills`)
FROM user1 a
JOIN user_kills b
ON a.id = b.user_id
GROUP BY a.`user_name`, b.`timestr`;

```

优化

```
SELECT a.`user_name`, b.`timestr`, b.`kills`
FROM user1 a
JOIN user_kills b ON a.`id` = b.`user_id`
JOIN user_kills c ON c.`user_id` = a.`id`
GROUP BY a.`user_name`, b.`timestr`, b.`kills`
HAVING b.kills = MAX(c.kills);
```

面试案例

```
select * from baseball;
| player | year | team   | score |
| ------ | ---- | ------ | ----- |
| A      | 2009 | red    | 22    |
| A      | 2010 | green  | 25    |
| A      | 2011 | yellow | 23    |
| A      | 2012 | yellow | 25    |
| B      | 2013 | blue   | 25    |
| B      | 2012 | blue   | 13    |
| B      | 2010 | blue   | 18    |
| C      | 2010 | green  | 18    |
| C      | 2011 | green  | 18    |
| C      | 2012 | blue   | 28    |
| C      | 2013 | green  | 18    |
```


```sql
CREATE TABLE IF NOT EXISTS baseball (
 player VARCHAR(25),
 year INT(4),
 team VARCHAR(25),
 score INT(4)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO baseball VALUES 
('A', 2009, 'red', 22),
('A', 2010, 'green', 25),
('A', 2011, 'yellow', 23),
('A', 2012, 'yellow', 25),
('B', 2013, 'blue', 25),
('B', 2012, 'blue', 13),
('B', 2010, 'blue', 18),
('C', 2010, 'green', 18),
('C', 2011, 'green', 18),
('C', 2012, 'blue', 28),
('C', 2013, 'green', 18)
```

求 每个球员得分最近最高得分的数据,



### 3. 如何实现分组选择

场景: 每个人杀怪最多的前两天?

```
-- 挨个查询
SELECT a.`user_name`, b.`timestr`, b.`kills` 
FROM user1 a
JOIN user_kills b
ON a.`id` = b.`user_id`
WHERE a.`user_name` = '孙悟空'
ORDER BY b.`kills` desc
LIMIT 2
```

> 问题?

1. 如果用户分类多, 需要执行统一查询多次
2. 增加应用程序同数据库的交互次数
3. 增加数据执行查询的次数,不符合批量处理的原则
4. 增加网络流量

```
SELECT c.`user_name`, d.`timestr`, d.`kills` 
FROM user1 c
LEFT JOIN (
    SELECT a.`user_name`, b.`timestr`, b.`kills` 
    FROM user1 a
    JOIN user_kills b
    ON a.`id` = b.`user_id`
    WHERE a.`user_name` = c.`user_name`
    ORDER BY b.`kills` desc
    LIMIT 2
) as d 
ON c.`user_name` = d.`user_name`
```