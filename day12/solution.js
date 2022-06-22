function getMinJump(obstacles) {
  // ¡No olvides compartir tu solución en redes!
  let all = [...Array(Math.max(...obstacles)).keys()]
  let jumps  = all.filter(x => 
        !obstacles.includes(x) && ![0,1].includes(x) && !obstacles.some((y)=>{
            return y % x == 0
        })                   
   );
  return Math.min(...jumps)
}