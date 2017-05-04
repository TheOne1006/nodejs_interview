## merge sort 归并排序

![](./images/merge.gif)

作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：
1. 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第2种方法）
2. 自下而上的迭代


## 步骤


```js
/**
 * 通过递归 mergeSort 方式
 * 将 arr 拆分至长度为2
 */
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    // 比较均匀的分割数组
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

// 进行对比 合并成  result
function merge(left, right)
{
    var result = [];

    // 循环次数 已 left/right 最小长度
    while (left.length>0 && right.length>0) {
        // 每次比较 left/right 第一个元素, 最小值放入 result 中
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // 将过长的 left/right 也放入result 中
    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
```
