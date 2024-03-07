// sum
function add(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error('Invalid input....');
    }
    let sum = a + b + c;
    console.log("Sum: " + sum);
}

function average(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log("Average: " + avg);
}

function largest(a, b, c) {
    let largestNum;
    if (a >= b && a >= c) {
        largestNum = a;
    } else if (b >= c && b >= a) {
        largestNum = b;
    } else {
        largestNum = c;
    }
    console.log("The largest number is: " + largestNum);
}

function smallest(a, b, c) {
    let smallestNum;
    if (a <= b && a <= c) {
        smallestNum = a;
    } else if (b <= c && b <= a) {
        smallestNum = b;
    } else {
        smallestNum = c;
    }
    console.log("The smallest number is: " + smallestNum);
}

try {
    largest(3, 4, f);
} catch (error) {
    console.log('Error occurred: ' + error.message);
} finally {
    add(1, 8, 7);
    average(2, 2, 2);
    largest(2, 3, 4);
    smallest(1, 2, 3);
    try {
        add(3, 'x', 7);
    } catch (error) {
        console.log('Error occurred: ' + error.message);
    }
}
