function canReconfigure(from, to) {
  // ¡No olvides compartir tu solución en redes!
   let obj = {}
   return from.length == to.length &&  from.split('').every(function(x,i){  
     return ( (Object.keys(obj).includes(x) || Object.values(obj).includes(to[i])) && obj[x] !== to[i] ) ?  false : obj[x] = to[i]  
   }) 
 } 