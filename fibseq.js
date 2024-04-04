/*

//Iterative fibonacci sequence up to 8:

function fibs(num) {
    let arr = [];

    for (let i = 0; i < num; i++) { 
        if (i > 1) {
            let oneStep = arr[i - 1] 
            let twoStep = arr[i - 2]
            let next = oneStep + twoStep

            arr.push(next);
        } else {
            arr.push(i);
        }
    }

    return arr;
}

let fibs8 = fibs(8);

console.log(fibs8);
    
*/

function fibsRec(num, arr = [0, 1]) {
    if (num === 2) {
        return arr;
    } else {
        let stepOne = (arr[arr.length - 1])
        let stepTwo = (arr[arr.length - 2])
    
        arr.push(stepOne + stepTwo);
        return fibsRec(num - 1, arr); 
    }
}

let fibsRec8 = fibsRec(8);

console.log(fibsRec8);


