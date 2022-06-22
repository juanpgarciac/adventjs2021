function learn(time, courses) {
  // ¡No olvides compartir tu solución en redes!
   let result = null
   while(time > 1 && result == null){
       courses.forEach((x,i)=>{
         if(result == null){
           result = courses.indexOf(time - x,i+1)>-1?[i,courses.indexOf(time - x,i+1)]:null
         }
       }) 
     --time
   }  
   return result
 }