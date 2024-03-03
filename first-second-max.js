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

firstSecondMin([4, 7, 8, 6, 7, 6 ])
firstSecondMin([5, 9, 3, 4, 8, 4, 3, 10])