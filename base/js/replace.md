## 1. 敏感词高亮显示.


```js
var keywords = ["阿扁推翻","阿宾","阿賓"];
var content = '阿扁推翻 把 阿賓 推翻了';
function filter_method(content){
    var value = content;
    //遍历敏感词数组
    for(var i=0; i<keywords.length; i++){
        //全局替换
        var reg = new RegExp(keywords[i], "g");
        //判断内容中是否包括敏感词
        if(value.indexOf(keywords[i])!=-1){
            var result = value.replace(reg, '<em>' + keywords[i] + '</em>');
            value = result;
        }
    }

    return value;
}
console.log(filter_method(content));
```
