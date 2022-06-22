function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let baja = false
  return heights.every(function(current, index, array) { 
    if(index > 0 ){
      let previous = array[index-1];
      if(previous == current)return false
      else if(previous < current ){
        return (!baja && index < array.length-1)
      }else baja = true
    }     
    return true
  })
}