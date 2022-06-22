function canCarry(capacity, trip) {
  // ¡No olvides compartir tu solución en redes!
   let current = 0;
   let tripObj = {}
   trip.forEach((x)=>{
     tripObj[ x[1]   ] = tripObj[ x[1] ] ?  tripObj[ x[1] ] + x[0] : x[0]
     tripObj[ x[2]   ] = tripObj[ x[2] ] ?  tripObj[ x[2] ] - x[0] : -x[0]
   })  
   for (let point in tripObj) {
     current += tripObj[point]
     if(current > capacity) return false
   }
   return true
 }