let arr1 =[1,2,3,4,5,6,7,8,9,0];
// for loop

let output = '';
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 5) {
        // break
        break; 
    }
    output += arr1[i] + "  ";
}
console.log("Array values using for loop with break: " + output);
// while
let j = arr1.length - 1; 
output = '';
while (j >= 0) {
   
    output += arr1[j] + "  ";
    
    j--; 
}
console.log("Array values using while loop(reverse order): " + output);


// do-while
let k =0;
output ='';
do{
    if (arr1[k] === 5) {
        k++; 
        // continue
        continue;
    }
    output += arr1[k] + " ";
    k++;  
    
}while(k<arr1.length);
  console.log(output);


