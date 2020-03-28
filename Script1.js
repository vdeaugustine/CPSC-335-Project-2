console.log("Console Test");
for (i = 0; i < 10; i++) {
    console.log(i);
}


var arr = ['0', 5, 'A', 6, 2, 7, 'B', 2, 'B' , 6, 0, 3];
QuickSort(arr);
mergeSort(arr);








function setup() {

    createCanvas(1604, 1604);

}

function draw() {

    
    
}


function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
   
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }

    for (i = 0; i < resultArray.length; i++) {
        //print(resultArray[i]);
        //console.log(resultArray[i]);
        console.log("In merge, step, ", i, " are at ", resultArray[i], "array size: ", resultArray.length);
        
    }
    console.log("Finished merge, " , resultArray.toString());
    // We need to concat to the resultArray because there will be one element left over after the while loop
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


function QuickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index

    if (len > 1) {

        index = partition(arr, left, right)

        if (left < index - 1) {
            QuickSort(arr, left, index - 1)
        }

        if (index < right) {
            QuickSort(arr, index, right)
        }

    }

    
    for (i = 0; i < arr.length; i++) {
        //print(arr[i]);
        //console.log(arr[i]);
        console.log("In quick, are at ", arr[i]);

    }
    console.log("Finished quick, " , arr.toString());


    return arr

}

function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,                 // Start pointer at the first item in the array
        j = right                 // Start pointer at the last item in the array

    while (i <= j) {

        // Move left pointer to the right until the value at the
        // left is greater than the pivot value
        while (arr[i] < pivot) {
            i++
        }

        // Move right pointer to the left until the value at the
        // right is less than the pivot value
        while (arr[j] > pivot) {
            j--
        }

        // If the left pointer is less than or equal to the 
        // right pointer, then swap values
        if (i <= j) {
            console.log(i, " is less than or equal to ", j, " so we are swapping.");
            console.log("Array before: ", arr.toString());
            [arr[i], arr[j]] = [arr[j], arr[i]]  // ES6 destructuring swap
            i++
            j--
            console.log("Array after: ", arr.toString());
        }
    }

    return i

}

function poresort1pass(a) {

    var n = a.length - 1;
    var x = a;

    //checks even (0,2,4,6...)
    for (var i = 0; i < n; i += 2) {
        if (x[i] < x[i + 1]) {
            var temp = x[i];
            x[i] = x[i + 1];
            x[i + 1] = temp;
        } 

    }

        //checks odd (1,3,5,7...)
        for (var i = 1; i < n; i += 2) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
            }
        }

        return x;
  }
