### 解释你对盒子模型的理解,以及如何在CSS 中告诉浏览器使用不同的盒模型.

> 回答:

理解:

W3C标准盒子模型和IE盒子模型,

- W3C标准盒子模型: 属性高（height）和属性宽（width）这两个值 **不包含** 填充（padding）和边框（border）
- IE盒子模型——属性高（height）和属性宽（width）这两个值 **包含** 填充（padding）和边框（border）

使用标准的W3C盒子模型（需要在页面中声明DOCTYPE类型）
