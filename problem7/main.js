function max(numbers) {
    let largest = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    return largest;
  }
  
  function min(numbers) {
    let smallest = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i]; 
      }
    }
    return smallest;
  }
  
  const nums = [90, 7, -110, 9, 5, 18];
  
  console.log(max(nums)); 
  console.log(min(nums)); 