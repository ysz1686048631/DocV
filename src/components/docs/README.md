
## 线性排序
> 之所以时间复杂度能达到线性，是因为这种排序不是基于比较的，但它的适用场景也有很大的局限性

> 通用数组定义

```js
let arr = [5, 1, 3,7,4, 6, 2];
```
## 选择排序
```js
function selectSort(arr) {
    let minIndex = 0;
    let temp;
    console.time('Runoob');
    
    for (let n = 0; n < arr.length; n++) {
        minIndex = n;
        for (let i = n + 1; i < arr.length; i++) {
            if (arr[minIndex] > arr[i]) {
                minIndex = i
            }
        }
        temp = arr[n];
        arr[n] = arr[minIndex];
        arr[minIndex] = temp;

    }
    console.timeEnd('Runoob')
}
 selectSort(arr)
```
## 快速排序（又称划分交换排序）
- 主要使用计算机的分治法
- 分治法：  在计算机科学中，分治法是建基于多项分支递归的一种很重要的算法范式；字面上的解释是“分而治之”，就是把一个复杂的问题
> 分成两个或更多的相同或相似的子问题，直到最后子问题的直接求解，原问题的解即子问题的解的合并。
 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
```js
    console.time('1.快速排序耗时');
    function QuickSort(arr, l, r){
        if (l < r){
            var x = arr[r],i = l-1,temp;
            for(let n = l; n <= r; n++){
                    if(arr[n]<=x){
                        i++;
                        temp=arr[i];
                        arr[i] = arr[n];
                        arr[n] = temp;
                    }
            }
            // 快速排序 将数组分为两部分，一边是大于中位数的另一边是小于中位数
            // 最后通过递归的方式遍历两个方向
            QuickSort(arr, l, i-1)
            QuickSort(arr, i+1, r)
        }

    }
    QuickSort(arr, 0, arr.length-1);
    console.timeEnd('1.快速排序耗时');
```
>线性排序 指的是 时间复杂度为 O(n) 的排序算法,包括:桶排序 ,基数排序,计数排序
>之所以时间复杂度能达到线性，是因为这种排序不是基于比较的，但它的适用场景也有很大的局限性    
> 桶排序适合处理数量聚多的数据，例如 桶排序解决大数据排序,大数据无法一次载入内存，所以分桶文件做一次次分割
> 桶排序，就是根据定义的桶内数量，计算出多少个通，通过区间的方式将需要排序的数组内元素对号入桶，然后对单个桶进行排序，最后合并
```js
function bucketSort(array, num) {
    let len = array.length;
    if (array.length < 1) return;
    let bucket = [];
    let result = [];
    let count = 0;
    let max = min = array[0];
    console.time('Runoob')
    // 1.取出最大值和最小值  
    for (let i = 0; i < len; i++) {
        min = min > array[i] ? array[i] : min;
        max = max < array[i] ? array[i] : max;
    }
    //  num 桶内部数量 
    //  2.桶数量=最大值减去最小值/每个桶的数量

    count = Math.floor((max - min) / num) + 1;
    const buckets = new Array(count);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    // 3.对号入桶：自身-最小值  
    for (let i = 0; i < len; i++) {
        buckets[Math.floor((array[i] - min) / num)].push(array[i])
    }
    // 4. 对桶内数据进行排序  
    for (let items of buckets) {
        if (items && items.length > 1) {
            //  使用快速排序进行排序
            for (let i = 0; i < items.length; i++){
                var key = items[i];
                var j = i - 1;
                while (j >= 0 && items[j] > key){
                    // items[j+1]相当于key
                    items[j + 1] = items[j];
                    j--;
                }
                // 替换值
                items[j + 1] = key;
            }
        }
        //  5. 合并数据
        result = result.concat(items)
    }
    console.timeEnd("Runoob")
    return result
}
// console.log(bucketSort(arr,4))
```

## 计数排序

>主要是以索引来排序，将不规则的数量按照索引进行排序 
>所过索引计算，起初每个元素的值都为1，通过依次累加，从上一个元素上累加1 就是当前元素的真实值 
>在通过反向取值进行排序
>找出待排序的数组中最大和最小的元素；
>统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
>对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
```js
function countSort(array){
        var len = array.length,
        B = [],
        C = [],
        min = max = array[0];   
         //    取最大值最小值的原因是 有空隙，将空隙补充
        for(let n = 0;n<len;n++){
              min = array[n]<=min?array[n]:min;
              max = array[n]>=max?array[n]:max;
              C[array[n]] = C[array[n]]?C[array[n]]+1:1
        }
     
        for(var j = min; j < max; j++){
            // 与前一项相加 的原因是因为array 的元素遍历到C之后为索引，初始时候每个索引为1，所以累加之后就是真实值
    
            C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
            
        }
        // 根据反向索引引入新数组B
        for(let i = len-1;i>=0;i--){
            // array[i] 就是索引 ，因为之前每一项都与前一项相加了所以，取下标索引的时候需要减一
            // 注意这里是将C中值减去1 不然索引不会对应
            // 倒序排序 也是根据 元素值作为下标索引进行排序
            B[C[array[i]]-1] = array[i];
            // // 减少 countArr 数组中保存的计数,避免重复的
            C[array[i]]--;
        }
        console.log(B)
}
var arrs = [5, 1, 3,7,4, 6, 2];
countSort(arrs)
```
## 基数排序

>基数排序主要结合了桶排序和计数排序两者的思路实现的
>基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集，以此类推的操作。
>具体思路就是 根据数组中的元素位数与差值不同，会放入不同数组，便利次数也是根据最大位数来设置，
>从最低位开始便利，便利条件会根据maxDigit变化，比如第一轮便利的是个位数的数组，第二轮就会便利十位数的数组，
>经过每层便利会对遍历过的数组进行内容移除，如果数组中在移除之后还存在数据那就会改变arr里的内容，如果数组中已经没有数据将不会改变arr内容
```js
function radixSort(arr,maxDigit){
    var mod = 10;
    var dev = 1;
    var counter = [];
    var obj = {};
    for(var i = 0;i<maxDigit;i++,dev*=10,mod*=10){
        for(var n = 0;n<arr.length;n++){
             var bucket = ~~((arr[n] % mod)/dev);   // 将个位数 与 十位数放入桶中
             counter[bucket] = counter[bucket] ?? [];
             counter[bucket].push(arr[n]);
             obj[bucket] = obj[bucket]??[]
             obj[bucket].push(arr[n])
             
        }
        var pos = 0;
        for(var z = 0;z<counter.length;z++){
            var value = null;
             if(counter[z]!=null){
                 while((value = counter[z].shift()) != null){
                    //  while只会循环一次 maxDigit 参数的意义就是根据数组中的最大位数来便利，比如数组中存在十位，那值就为2，千位值为3 以此类推
                    //  先便利个位 再便利十位，如果删除首位后桶里大于2的长度值，会将arr数组第pos位替换，否则arr中第pos位不变
                  
                     arr[pos++] = value;
                 }
             }
        }
    }
    console.log(arr)
}

var arrs = [7,4,3, 44, 38, 5];
// radixSort(arrs,2)
```



## 线性排序minSort最少代码排序-效率最快 0.011ms左右
```js
function minSort(array){
    console.time('time')
    let len = array.length
    let B = [];
    for(let i = len-1;i>=0;i--){
        B[array[i]-1] = array[i];
    }
    B = B.filter(Boolean)
    console.timeEnd('time')
    console.log(B);
}
//平均情况  时间T(n) = O(n)[线性阶] 空间O(n-1) 0.011ms ;
minSort(arrs)
```