## SQL 开发技巧

常见的 SQL 语句类型

* DDT 数据定义语言
    - DataDefinition Language
    - 例如: 创建(create)、修改(alter)、删除(drop)
* TCL 事务处理语言
    - Transaction Control Language
    - 例如: BEGIN TRANSACTION, COMMIT, ROLLBACK
* DCL 数据控制语言
    - Data Control Language
    - 控制数据对象的访问权限
    - 例如: GRANT 授权, REVOKE 取消授权
* DML 数据操作语言
    - Data Manipulation Language
    - 例如: SELECT, INSERT, UPDATE, DELETE

sql 开发技巧偏向于 DML.


> NOTE !

## DOCKER MYSQL PHPMYADMIN

```shell
# 创建 mysql 服务实例
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql --character-set-server=utf8 --collation-server=utf8_unicode_ci

# 连接到 mysql server 中
# env LANG=C.UTF-8 支持输入中文
docker run -it --link some-mysql:mysql --rm mysql env LANG=C.UTF-8 sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'
```
