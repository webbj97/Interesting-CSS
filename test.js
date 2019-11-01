function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            console.log(preIndex,'第',i,'循环')
            console.log(arr);
            console.log('---');
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
console.log('1')
var res = insertionSort([1, 3, 2, 1])
console.log(res)