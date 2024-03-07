/**
 * function to find first and second max
 */

function firstSecondMax(arr) {
    let firstMax = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;

    if(!arr.length) {
        console.log({firstMax, secondMax})
        return;
    }

    firstMax = arr[0];
    secondMax = arr[0];

    arr.forEach((element) => {
        if(firstMax < element) {
            secondMax = firstMax;
            firstMax = element;
        } else if( firstMax !== element && secondMax < element) {
            secondMax = element;
        }
    });

    console.log({firstMax, secondMax})
}

firstSecondMax([4, 7, 8, 6, 7, 6 ])
firstSecondMax([5, 9, 3, 4, 8, 4, 3, 10])

function firstSecondMin(arr) {
    let firstMin = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;

    if(!arr.length) {
        console.log(firstMin, secondMin)
    }

    arr.forEach((element) => {
        if(firstMin > element) {
            secondMin = firstMin;
            firstMin = element;
        } else if(firstMin != element && secondMin > element) {
            secondMin = element;
        }
    });

    console.log({firstMin, secondMin})
}

firstSecondMin([4, 7, 8, 6, 7, 6 ]);
firstSecondMin([5, 9, 3, 4, 8, 4, 3, 10]);

function isSorted(arr) {
    let check = true;
    if(arr.length == 0 || arr.length == 1) {
        return check;
    }
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) {
            check = false;
            break;
        }
    }
    return check;
}

console.log(isSorted([1, 2, 2, 2, 3]));
console.log(isSorted([4, 5, 4, 4, 4]));
console.log(isSorted([0, 0, 0, 1]));

function removeDuplicates(arr = []) {
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            continue;
        } else {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i+1);
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([1, 2, 2, 2, 3]));