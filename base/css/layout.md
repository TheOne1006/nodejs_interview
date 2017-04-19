1. CSS 实现垂直居中, HTML 解构如下.

```html
<div class="box">
    <div class="con"></div>
</div>
```

答案1:

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        background: red;
        position:relative;
    }
    .con {
        width:100px;
        height:100px;
        margin: auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        background: yellow;
    }
</style>
<div class="box">
    <div class="con"></div>
</div>
```

答案2:

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        display:table-cell;
        vertical-align:middle;
        text-align: center;
        background: red;
    }
    .con {
        width:100px;
        height:100px;
        display:inline-block;
        background: yellow;
    }
</style>
<div class="box">
    <div class="con"></div>
</div>
```



答案3:

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: red;
    }
    .con {
        width:100px;
        height:100px;
        background: yellow;
    }
</style>
<div class="box">
    <div class="con"></div>
</div>
```

答案4:

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        position:relative;
        background: red;
    }
    .con {
        width:100px;
        height:100px;
        position:absolute;
        left:50%;
        top:50%;
        margin-left: -50px;
        margin-top:-50px;
        background: yellow;
    }
</style>
<div class="box">
    <div class="con"></div>
</div>
```
