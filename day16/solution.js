function decodeNumbers(symbols) { 
  // ¡No olvides compartir tu solución en redes!
   let symbols_values = {'.':1, ',':5, ':':10, ';':50, '!':100}
   let decoded = 0;  
   let map = symbols.split('').map(function (x){
     return symbols_values[x]
   })  
   let reserve = map[map.length-1];
   decoded = map.reverse().reduce(function(previous,current){ 
     let returned =  reserve > current? previous - current: previous + current;
     reserve = current;
     return returned;
   })
   return decoded
 }