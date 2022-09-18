function max(numbers) {
    // your code here, for-loop method preferred
    var max = numbers[0];
    var al = numbers.length;
    for (var i = 0; i < al; i++) 
    {
        if(numbers[i] > max) max = numbers[i];
    }
    return max;
}
function findPosition(numbers, target) {
    // your code here, for-loop method preferred
    var al = numbers.length;
    for (var i = 0; i < al; i++) 
    {
        if(numbers[i] == target) return i;
        
    }
    return -1;
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1