function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!
   let countArr = carriers.filter(function(x){  
     return x[0] == carrierID
   })
   if(countArr.length>0){
       let tmpcount = 0;
       countArr[0][2].forEach(function(_carrierID){
           tmpcount += countPackages(carriers, _carrierID)
       })  
       return countArr[0][1] + tmpcount
   }
   return 0;
 }