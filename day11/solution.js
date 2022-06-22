function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  let normal = 12 * times
  let sum = 0;
  while(times > 0){
    sum += (12 * Math.pow(0.75,times))
    --times
  }
  let card = 250 + sum
  return normal > card
}