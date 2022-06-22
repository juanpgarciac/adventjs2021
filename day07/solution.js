function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
  if(typeof store === 'object'){
    let arr = Object.values(store)
    let b = false
    for(let item of arr){
        if(!b)b = contains(item,product)
    }
    return b
  }else if(typeof store === 'string'){
      return(store === product) 
  }  
  return false
}