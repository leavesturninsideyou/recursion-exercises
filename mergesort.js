/*

Psuedo code:

merge sort (arr) {

    beginning = arr[0]
    end = (arr.length - 1)
    middle: ((arr.length - 1) - arr[0]) / 2 

    want start, end, and middle to be reassigned

    if beginning is greater than end:
        call function again
    else: 
        return fully sorted array

    split given arr into halves
    split array until two single values
    compare minimums
    make minimum first val in sorted array
    remaining values get pushed
}

*/

function mergeSort(arr) {
    const half = arr.length /  2;

    if (arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right, arr = []) {
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [ ...arr, ...left, ...right ];
}



let exampleInput = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);

console.log(exampleInput);