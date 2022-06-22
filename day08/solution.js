function maxProfit(prices){
  // ¡Y no olvides compartir tu solución en redes!
    let profit = -1;
    prices.map((x,i,arr)=>{   
        let max = Math.max(...Array.from(arr).splice(i+1))
        profit = (max - x > profit) && max - x > 0 ? max-x : profit;   
    })
    return profit;
}