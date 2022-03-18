/**
 * MergeSort(arr[], l,  r)
    If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = (l+r)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
 */
function sortByLength(inputArray) {
    if (inputArray.length <= 1) {
        return inputArray;
    }

    const leng = inputArray.length;
    const halfLeng = Math.ceil(leng/2);

    const firstHalf = inputArray.slice(0, halfLeng);
    const secondHalf = inputArray.slice(halfLeng);

    const sortedFirstHalf = sortByLength(firstHalf);
    const sortedSecondHalf = sortByLength(secondHalf);

    let sortedArray = [];
    let f = 0, s = 0;
    while (f < sortedFirstHalf.length && s < sortedSecondHalf.length) {
        if (sortedFirstHalf[f].length <= sortedSecondHalf[s].length) {
            sortedArray = sortedArray.concat(sortedFirstHalf[f]);
            f += 1;
        } else {
            sortedArray = sortedArray.concat(sortedSecondHalf[s]);
            s += 1;
        }
    }

    if (f < sortedFirstHalf.length) sortedArray = sortedArray.concat(sortedFirstHalf.slice(f))
    else if (s < sortedSecondHalf.length) sortedArray = sortedArray.concat(sortedSecondHalf.slice(s))

    return sortedArray;
}


// Bubble sort
// compare every pair of emlements located next to each other
function sortByLength1(inputArray) {
    for (let j = 1; j < inputArray.length; j += 1) {
        for (let i = 0; i < inputArray.length - j; i += 1) {
            if (inputArray[i].length > inputArray[i + 1].length) {
                const temp = inputArray[i];
                inputArray[i] = inputArray[i + 1];
                inputArray[i + 1] = temp;
            }
        }
    }
    
    return inputArray;
}
