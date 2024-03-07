function rightRotate(arr = [], k) {
    let temp = [];
    let n = arr.length;
    let d = k % n;
    let i = 0;
    for(; i < d; i++) {
        temp[i] = arr[i];
    }
    for(; i < n; i++) {
        arr[i-d] = arr[i];
    }
    for( i = n - d; i < n; i++ ) {
        arr[i] = temp[i-(n-d)];
    }
    return arr;
}

console.log(rightRotate([1, 2, 3, 4, 5, 6], 7));

function swap(arr, v1, v2, x, y) {
    arr[x] = v2;
    arr[y] = v1;
}

function moveZerosToEnd(arr) {
    let j = -1;
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        if(arr[i] == 0) {
            j = i;
            break;
        }
    }
    for(let i = j + 1; i < n; i++) {
        if(arr[i] !== 0) {
            swap(arr, arr[i], arr[j], i, j);
            j++;
        }
    }
    return arr;
}

console.log(moveZerosToEnd([1, 0, 2, 0, 4, 1, 5, 3, 0, 6, 9, 0, 8]))

