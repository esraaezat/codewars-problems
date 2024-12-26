function findAverage(array) {
  
    if (array.length === 0) {
        return 0; 
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; 
    }
    return sum / array.length;
}

console.log(findAverage([5, 6, 7, 8, 9]));
console.log(findAverage([]));     
console.log(findAverage([50, 60, 70]));
