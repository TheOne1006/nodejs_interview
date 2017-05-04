## Counting Sort 计数排序

计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
> 限制
1. 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有 **确定范围** 的 **整数**。

![](./images/counting.gif)

## 步骤


```js
function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}
```
