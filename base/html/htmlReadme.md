## html 简介和发展历史


## 基础的dtd 和 meta
<!DOCTYPE html>

### 元数据（metadata）是关于数据的信息。
提供关于 HTML 文档的元数据。元数据不会显示在页面上，但是对于机器是可读的  

常用meta:  
```
<meta charset="UTF-8" />
<meta name="keywords" content="keywords,keywords" />
<meta name="description" content="这里是描述" />  
```

## html 元素

### 块级元素( block level element) : 块级元素在浏览器显示时，通常会 _以新行来开始_（和结束）。

- div
- table
- p (paragraph): 段落
- h1 - h5
- from
- iframe
- about list
  - dl(Definition list): 定义列表
  - ul( Unordered list ): 无序列表
  - ol( Ordered list ) : 有序列表
- pre (preformatted): 预格式化
- hr ?


### 内联元素 ( inline element): 显示时通常不会以新行开始

- about link
  - a
    1. 连接 href="http://url"
    2. 邮件发送 href="mailto:29@qq.com"
    3. 锚点  href="#anchors"
  - img
- about text
  - br
  - span
- about Styles
  - em (emphasized)
  - b (bold)
  - strong
  - i (italic)
  - code
- about from
  - input
  - button
  - textarea
  -


## HTML 语义化
__什么是语义化:__ 明白每个标签的用途  

__好处:__  
- 更容易被搜索引擎收录。
- 更容易让屏幕阅读器读出网页内容。


## `<script>` 标签

内联: 当html 解析到 `<script>` 元素,它默认必须先执行脚本,然后再恢复文档的解析和渲染.  
带src: 脚本执行默认是 _同步_ 和 _阻塞_ 的
defer: 浏览器延迟执行脚本,直到文档加载和解析完成.
async: 浏览器可以尽快的执行脚本,而不用在下载脚本时阻碍文档解析.










## end
