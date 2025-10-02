// question no-1
let arr1 = [1, 2, 3, 4, 5]
let product = 1;
for(let i = 1; i < arr1.length; i++) {
    product = product * arr1[i];
}
console.log(product);

// question no-2
let arr2 = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 1; i < arr2.length; i++) {
    sum = sum + arr2[i];
}
console.log(sum);

//  question no-3
let arr3 = [3, 3, 3, 1, 2];
 let k = 3;
 let count = 0;
 for(let i = 1; i < arr3.length; i++) {
    if(arr3[i] === k) {
        count++;
    }
 }
 console.log(count);

//  question no-4
let arr4 = [7, 1, 2, 3, 4, 5, 6, 7];
let evensum = 0; 
 let oddsum =0;
 for(let i = 0; i < arr4.length; i++) {
    if(arr4[i] % 2 === 0)
    evensum = sum + arr4[i];
    else oddsum = sum + arr4[i];
} 
console.log(evensum, oddsum);

// question no-5
let arr5 = [1, 2, 3, 4, 5,];
let M = 2;
let found = "NO";
for(let i = 0; i < arr5.length; i++){
    if(arr5[i] === M ) {
        found = "YES";
        break;
        
    }
}
console.log(found);

function Find_Num(arr, M) {
    return arr.includes(M) ? "YES" : "NO";
}
console.log(Find_Num([1, 2, 3, 4, 5], 2)); 

// question no-6
let arr6 = [11, 23, 3, 45, 72, 68];

let highAges = [];

for(let i = 0; i < arr6.length; i++) {

    if(arr6[i] >= 18) {

        highAges.push(arr6[i]);
    }
}
console.log(highAges.join(" "));

let arr11 = [6,11,23,3,45,72,68];
let res1 = arr11.filter((x) => x >= 18);
console.log(res1);

// question no-7
let arr7 = [5, 1, 2, 3, 4, 5];
for(let i = 0; i < arr7.length; i++) {
    arr7[i] = arr7[i] + 1;
}
console.log(...arr7);

let arr13 = [5, 1, 2, 3,  4,5];
let res = arr13.map( x => x + 1);
console.log(res);

// question no-8
let arr8 = [13, 89, 45, 98, 67, 45, 54];
let result = "YES";
for(let i = 0; i < arr8.length; i++) {
    if(arr8[i] < 32) {
        result = "NO";
        break;
    }
}
console.log(result);

// question no-9
let colors = [3, 2, 4, 1,  2, 3];  

let uniqueColors = colors.filter(c => colors.indexOf(c) === colors.lastIndexOf(c));

console.log(uniqueColors.length); 


// question no-10
let arr10 = [33, 11, 44, 66, 22, 77];
let min = arr10[0];
let max = arr10[0];
for(let i = 0; i < arr10.length; i++) {
    if(arr10[i] < min)
    min = arr10[i];
    if(arr10[i] > max)
    max = arr10[i];
}
console.log(min, max);

let arr15=[66,33,11,44,66,22,77]
arr5.sort()
console.log(arr15[0]);
console.log(arr15[arr15.length-1]);




