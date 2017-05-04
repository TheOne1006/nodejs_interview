## 快速排序算法

快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。

![](./images/quick.gif)

### 快速排序 步骤

1. pivot(基准): 从数列中挑出一个元素，称为 “基准”（pivot）
2. partition(分区):
     - 所有元素比基准值小的摆放在基准前面
     - 所有元素比基准值大的摆在基准的后面
     - 相同的数可以到任一边
     - 在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作
3. recursive(递归): 把小于基准值元素的子数列 和 大于基准值元素的子数列 再次排序。

```js
/**
 * 快速排序 步骤
 * 1. 从数列中挑出一个元素，称为 “基准”（pivot）
 * 2. 重新排序数列，
 *      - 所有元素比基准值小的摆放在基准前面
 *      - 所有元素比基准值大的摆在基准的后面
 *      - 相同的数可以到任一边
 *      - 在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作
 * 3. 递归地（recursive）把小于基准值元素的子数列 和 大于基准值元素的子数列 再次排序。
 */
function quickSort(ary) {
    var len = ary.length;
    if(len < 3){
        return ary;
    }
    /**
     * 在这里选择 any[baseIndex] 作为 基准
     */
    var baseIndex = Math.floor(len/2),
        base = ary[baseIndex];

    // smallerAry 比基准元素小的集合
    var smallerAry = [],
    // biggerAry 比基准元素大的集合
        biggerAry = [];

    for(var i = len - 1,cur ; i > -1 ; i-- ){
        cur = ary[i];
        // 滤过当前基准数
        if(i === baseIndex){
            continue;
        }
        cur = ary[i];
        // 比基准数小的 放到 smallerAry 中, 其他放到 biggerAry 中
        cur < base ? smallerAry.push(cur) : biggerAry.push(cur);
    }
    // 在这个分区退出之后，该基准就处于数列的中间位置
    smallerAry.push(base);
    // 或者
    // biggerAry.unshift(base)

    // 递归地（recursive）把小于基准值元素的子数列 和 大于基准值元素的子数列 再次排序。
    return quickSort(smallerAry).concat(quickSort(biggerAry));
}
```

### 问题

如果与 base 相同,否则单独拿出, 避免再次对比
