var isSquare = function(n){
    let number = math.sqrt(n)
    
    if (number % 1  != 0) {
      return false
    } else {
      return true 
    }
  }

  isSquare(4)