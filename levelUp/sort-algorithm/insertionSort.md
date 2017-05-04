# Insertion Sort 插入排序

![](./images/insertion.gif)


## 步骤

```js
/**
 * 插入排序
 * 从小到大
 */
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;

    // 循环 arr.length 次, 注意从 1 开始
    for (var i = 1; i < len; i++) {
        /**
         * 获取前一个 位置的索引, 作为搜索索引
         * 以及当前位置的值
         */
        preIndex = i - 1;
        current = arr[i];
        /**
         * 如果当前值小于,
         * 搜索索引的值,
         * 则 将搜索索引的值向后退一位, 同时搜索索引 向前进一位,进行下次匹配
         */
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        // 跳出循环后, 将当前值赋予 搜索索引的后一位
        arr[preIndex+1] = current;
    }
    return arr;
}
```
