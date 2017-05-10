## 数组(Array)对象

### Array 对象属性

1. constructor 创建该对象的函数引用
2. length  设置或返回数组中元素的数目
3. prototype 原型

### Array 对象方法


1. concat(arrayX, ...) => array
    * 连接两个或多个数组
    * !该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
2. join(separator?: string) => string
    * 把数组放入一个字符串中,通过指定分隔符分割
3. pop() => mix
    * 删除并返回最后一个元素
    * 会需改原数组
    * 希望不修改原数组,返回新的数组可以使用 `arr.slice(arr.length - 1, arr.length)`
4. push(newEle1, ?newELe2, ...) => number 数组新长度
    * 像数组添加一个或者多个元素, 并返回新的长度
    * 会修改原数组, 不会产生新的数组
    * 如果不希望修改原数组,返回新数组可以使用 `concat`
5. reverse() => array 返回颠倒后的数组
    * 颠倒数组元素的顺序
    * 会改变原数组, 不会产生新的数组
6. shift() => mix
    * 删除数组第一个元素,并返回第一个元素的值
    * 会改变原数组, 不会产生新的数组
7. slice(start: number, end?: number) => array 新数组
    * 从已有数组中返回指定元素
    * start/end 可以为负数,代表 (array.length * n + start/end)
    * 不会修改原数组, 会返回一个新数组
8. sort(sortBy?: Function) => array 排序后的数组(原)
    * 对数组元素进行排序
    * 对数组的引用, 不生成副本
9. splice(index: Int, howmany: Int, item1, item2, ...) => 被删除的元素组成新元素.
    * 向数组 添加/删除 项目, 返回修改后的项目
    * 会修改原数组,不会产生新的数组
    * index: 操作的起始位置
    * howmany: 删除项目数量, 可为 0,
    * item 添加的新项目
10. unshift(newEl1, newEl2 ...) => arr.length
    * 像数组开头压如一个或者更多元素, 并返回新的长度
    * 不会产生新的数组

### ES2015 扩展

1. `Array.from(arrayLikeObject, mapFunction)` 方法用于将两类对象转为真正的数组
    * es5 写法 `[].slice.call(arguments)`
    * es6 `Array.from(arguments)` / `[...arguments]`
    * 参数必须要有 length 属性.
2. Array.of() => array
    * 解决 `new Array()` 参数不同行为也不同
3. Array.prototype.copyWithin(target: number, start: number = 0, end: number = this.length)
    * target: 开始替换数据的位置
    * start 开始读取的位置
    * end 读取结束结束
4. Array.prototype.find(filter)
    * 找出第一个符合条件的数组成员
    * 找不到返回 `undefined`
5. findIndex 类似 find
    * 找不到返回 `-1`
6. Array.prototype.fill()
    * 给数组填充数据
7. Array.prototype.entries()
8. Array.prototype.keys()
9. Array.prototype.values()
10. Array.prototype.includes() => boolean
    * 是否包含指定值
