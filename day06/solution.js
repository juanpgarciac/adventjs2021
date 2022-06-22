function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  var arr = null
  numbers.map( (x) => {    
      if(arr == null){
        let other = result - x
        arr = numbers.indexOf(other,numbers.indexOf(x)+1) > -1 ? [x,other] : null     
      }
  } )
  return arr
}