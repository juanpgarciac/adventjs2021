function canMouseEat(direction, game) {
  let i = 0;
  let j = 0;  
  for(i=0;i< game.length;i++ ){
    for(j=0;j< game[0].length;j++ ){
      if(game[i][j] == 'm'){
        switch (direction) {
          case 'up': return i>0 && game[i-1][j] == '*'
          case 'down': return i < game.length-1 && game[i+1][j] == '*'
          case 'left': return game[i][j-1] == '*'
          case 'right': return game[i][j+1] == '*'
        }
      }
    }
  }
  return false
}