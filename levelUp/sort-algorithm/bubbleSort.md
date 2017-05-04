## 冒泡排序 Bubble Sort

![](./images/bubble.gif)

### 步骤

1. 计算最要对比的回合数
2. 每回合中
    - 通过元素的两两交换
    - 可以确定 当前回合的 最大/最小值

```js
function bubbleSort(arr) {
    var len = arr.length;
    // 第一 需要执行 arr.length 回合
    for (var i = 0; i < len; i++) {
        // 第二 每回合中, 相邻两元素对比, 同时每回合较少 i, 因为每回合能确定最大 / 最小值
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
```
