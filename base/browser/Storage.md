### 1. cookie, sessionStorage 和 localStorage 区别

> 回答:

* cookie cookie的数据是会通过http请求带到服务器的，同一域名下的所有请求都会带上它(根据 path).
* sessionStorage 浏览器存储, 在浏览器关闭清除, 尽在当前页面有效
* localStorage 浏览器存储, 在浏览器关闭不清除, 在相同域名相同
