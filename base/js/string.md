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
3. indexOf(search: string,fromindex: number) 方法/lastIndexOf
    * 定位字符串总某个字符首次出现的下标, 未出现则为0
    * str.indexOf('hello'); // str 中首次出现 hello 的下标
    * fromindex 的 合法取值范围是 0 到 stringObject.length - 1
    * 未找到返回 -1
4. match(search: string | regexp) => null | string | Array 方法
    * 字符串内检索指定值, 找到返回匹配的值
    * 没找到都返回 null
    * 参数为 string 返回值为 string
    * 参数为 regexp 返回值为 Array
    * regexp 有标志 `g` 未匹配所有匹配的内容
5. replace (search: string | regexp, replacement: string | function) => string 替换字符
    * 一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
6. charAt(index: number)/charCodeAt(index: number)
    * charAt 返回指定下标的字符
    * charCodeAt 返回指定下标的字符的 Unicode 编码
7. concat(str: string, str2?: string, ...)
    * 连接两个或多个字符串
    * stringObject.concat() 与 Array.concat() 相似
    * `注意` 使用 `+` 更方便
8. search(searchValue: string | regexp) => number
    * 返回匹配的下标
    * 未找到返回 -1
9. slice(start: number,end: number) => string
    * 提取字符串的片断，并在新的字符串中返回被提取的部分
    * start: 起始下标允许 负数
    * end: 结束下标
10. split(separator: string | regexp, howmany?: number) => array
    * 方法用于把一个字符串分割成字符串数组。
    * howmany 数组的最大长度, 多余的减拆掉
    * 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割
11. substr(start: number,length? :number) => string
    * 字符串中抽取从 start 下标开始获取 length(剩下全部) 字符。
    * start 可以为负数
    * 重要事项：ECMAscript 没有对该方法进行标准化，因此反对使用它
12. substring(start: number,stop? : number) => string
    * 提取字符串中介于两个指定下标之间的字符
    * stop 为结束字符 + 1
