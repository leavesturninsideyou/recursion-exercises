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

function mergeSort(arr, sorted = []) {
    let start = 0
    let end = (arr.length - 1) + 1;
    let middle = (arr.length / 2);
    
    let leftSegment = arr.slice(start, middle);
    let rightSegment = arr.slice(middle, end);

    //merge function steps

    //loop through any segment 
    //use i as the index pointer for both segments
    //if one segment is longer (no more values to compare),
    //push remaining values to "sorted array"


    if (arr.length === 1) {
        return;
    } else {
        mergeSort(leftSegment);
        mergeSort(rightSegment);
        for (let i = 0; i < leftSegment.length; i++) {
            //merge function
        }
        
    }

    if (arr.length === 1) {
        if (leftSegment > rightSegment) {
            return leftSegment;
        } else {
            
        }
        console.log(arr);
    }


} 

function largerSegment(segment) {

}


let exampleInput = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);

console.log(exampleInput);