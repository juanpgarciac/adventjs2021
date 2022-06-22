function pangram(letter) {
  // ¡No olvides compartir tu solución en redes!
   letter =  letter.toLowerCase().normalize('NFKC')
   return 'abcdefghijklmnñopqrstuvwxyz'.split('').every(function(a){
     return letter.includes(a)
   })  
 }