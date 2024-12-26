var sumAndMultiply = function(sum, multiply) {
    for (var x = 0; x <= sum; x++) { 
        var y = sum - x; 
        if (x * y === multiply) { 
            return [x, y]; 
        }
    }
    return "null"; 
};


console.log(sumAndMultiply(12, 32)); 