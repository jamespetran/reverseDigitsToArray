//this is for codewars https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
    //code here
    let nArray = n.toString();
    nArray = nArray.split('');
    let outArray = [];
    for (let i = 0; i < nArray.length; i++) {
        outArray[i] = nArray[nArray.length-i-1];
        outArray[i]=Number(outArray[i])
    }

    return outArray
}

let n = 48653;
let m = digitize(n);
console.log(m);