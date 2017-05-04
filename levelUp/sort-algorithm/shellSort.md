# Shell Sort 希尔排序

shell sort 是 insertion sort 更高效的实现,
它会优先比较距离较远的元素.
希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列.


## 步骤 ?? 代码未理解


```js
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;

    //动态定义间隔序列
    while(gap < len/3) {
        gap = gap*3+1;
    }

    for (gap; gap> 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}
```

???
