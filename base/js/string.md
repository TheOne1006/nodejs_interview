## 字符串(String)对象

### String 对象属性

1. constructor 创建该对象的函数引用
2. length  字符串长度
3. prototype 原型

### JavaScript String 对象实例拥有方法

1. anchor('锚点名: string')
2. 为字符串添加样式(不建议这样使用)
    * txt.big()
    * txt.small()
    * txt.bold()
3. indexOf 方法/lastIndexOf
    * 定位字符串总某个字符首次出现的下标, 未出现则为0
    * str.indexOf('hello'); // str 中首次出现 hello 的下标
4. match(search: string | regexp) => null | string | Array 方法
    * 字符串内检索指定值, 找到返回匹配的值
    * 没找到都返回 null
    * 参数为 string 返回值为 string
    * 参数为 regexp 返回值为 Array
    * regexp 有标志 `g` 未匹配所有匹配的内容
5. replace (search: string | regexp, replacement: string | function) => string 替换字符
    *
6. charAt(index: number)/charCodeAt(index: number)
    * charAt 返回指定下标的字符
    * charCodeAt 返回指定下标的字符的 Unicode 编码
7. concat(str: string, str2?: string, ...)
    * 连接两个或多个字符串
    * stringObject.concat() 与 Array.concat() 相似
    * `注意` 使用 `+` 更方便
8.
9.
