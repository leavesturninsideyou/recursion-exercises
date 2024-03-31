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


