## 行转列

场景: 生成打怪的流水记录表

如下

+-----------+--------------+-----------+
| 孙悟空     | 猪八戒        | 沙僧       |
+-----------+--------------+-----------+
| 20        | 17           | 10        |
+-----------+--------------+-----------+


第一步: 生成带有姓名的打怪流水记录表.

```sql
SELECT a.user_name, b.kills
FROM user1 a
RIGHT JOIN user_kills b
ON a.id = b.user_id;
```

第二步: 通过 GROUP 进行汇总

```sql
SELECT a.user_name, SUM(b.kills)
FROM user1 a
RIGHT JOIN user_kills b
ON a.id = b.user_id
GROUP BY a.user_name;
```

第三部: 行显示,显示为列显示

```sql
SELECT SUM(b.kills) AS '孙悟空'
FROM user1 a
RIGHT JOIN user_kills b
ON a.id = b.user_id
WHERE a.user_name = '孙悟空'
GROUP BY a.user_name;
```

通过 cross join 进行行转列
```sql
SELECT *
FROM (
    SELECT SUM(b.kills) AS '孙悟空'
    FROM user1 a
    RIGHT JOIN user_kills b
    ON a.id = b.user_id and a.user_name = '孙悟空'
    GROUP BY a.user_name
) a CROSS JOIN (
    SELECT SUM(b.kills) AS '沙僧'
    FROM user1 a
    RIGHT JOIN user_kills b
    ON a.id = b.user_id and a.user_name = '沙僧'
    GROUP BY a.user_name
) b CROSS JOIN (
    SELECT SUM(b.kills) AS '猪八戒'
    FROM user1 a
    RIGHT JOIN user_kills b
    ON a.id = b.user_id and a.user_name = '猪八戒'
    GROUP BY a.user_name
) c

```
