# Selection Sort 选择排序

![](./images/selection.gif)

## 步骤

1. 创建一个 最小索引 变量
2. 循环数量为 `arr.length`
3. 每回合
    - 当前数字与当前最小索引的数字进行对比
    - 如果当前数字小于最小索引则互换位置

```js
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
```
