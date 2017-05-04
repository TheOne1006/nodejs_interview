### 1. 实现以下 findDocList 方法

```js
var docs = [
  {id: 1, words: ['hello', 'world']},
  {id: 2, words: ['hello', 'kids']},
  {id: 3, words: ['hello', 'zzz']},
  {id: 4, words: ['world', 'kids']},
];

findDocList(docs, ['hello']); //文档1, 文档2, 文档3
findDocList(docs, ['hello', 'world']); // 文档1
```


```js
function findDocList (docs, filterArr) {
  // docs 文档过滤
  return docs.filter(function(item) {
    // filterArr 的每个条件都必须满足
    return filterArr.every(function(filterItem) {
      // 与 words 进行一一对比.部分满足即可
      return item.words.some(function(word) {
        return word === filterItem;
      })

    })
  })
}
```


### 2. 编写下 js 的深度克隆 deepClone

```js
// toJSON
function deepClone( obj ) {
    var _tmp = JSON.stringfly(obj);
    return JSON.parse(_tmp);
}
```

```js
function deepClone ( obj ) {
    var cloneObj = {};
    // 过滤掉不符合的数据
    if (typeof obj !== 'object') {
        return obj;
    }

    // for in 遍历可枚举型属性
    for(var key in obj) {
        if (typeof obj[key] === 'object') {
            cloneObj[key] = deepClone(obj[key]);
        } else {
            cloneObj[key] = obj[key];
        }
    }
    return cloneObj;
}
```

### 3. 有一个数组 `a = [8, 10, 30, 55, 88, 90, 1]`, 新建一个数组 b, b每次从a 随机中取走一个元素,取完为之.


```js
var a = [8, 10, 30, 55, 88, 90, 1];
var b = [];
var a_len = a.length;

for (var i = 0 ; i < a_len ; i++) {
    // Math.floor 确保能取到 0
    var random = Math.floor(Math.random() * a.length);
    b = b.concat(a.splice(random, 1));
}

console.log(b);

```
