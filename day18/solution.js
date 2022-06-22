function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes!
   files.forEach((x,i)=>{    
     let index = files.indexOf(x,i+1)
     let count = 1
     while(index !== -1){
       files[index] = x + '('+count+')'
       count++
       index = files.indexOf(x,i+1)
     }
   })
   return files
 } 