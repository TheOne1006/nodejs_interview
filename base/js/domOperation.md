#### 1. 使用 原生js/ jQuery 遍历以下li

```html
<ul>
    <li>test1</li>
    <li>test2</li>
    <li>test3</li>
    <li>test4</li>
    <li>test5</li>
    <li>test6</li>
</ul>
```

> 答案一: jQuery 版本

```js
$('ul li').each(function(index, ele) {
    console.log($(ele).text())
    console.log($(this).text())
})
```

> 答案二: 原生 JS 版本

```js
var ulEle = document.getElementsByTagName('ul')[0];
var ulChild = ulEle.childNodes;
for(var i = 0; i<ulChild.length; i++){
    if(ulChild.item(i).tagName === 'LI') {
        console.log(ulChild.item(i).innerHTML);
    }
}
```
