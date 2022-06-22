function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  let coinindex = 0;
  let coins = [50,20,10,5,2,1]
  let coinsChange = new Array(6).fill(0);
  while(change > 0){
    if(change >= coins[coinindex]){
       change -= coins[coinindex];
       ++coinsChange[coinindex] 
     }else{
       coinindex++;
     }
  }
  return coinsChange.reverse()
}