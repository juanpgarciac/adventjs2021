function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
  let len = gifts[0].length
  let wrapped = [];
  wrapped.push('*'.repeat(len+2))
  gifts.forEach((x)=>{
    wrapped.push('*'+x+'*');
  })
  wrapped.push('*'.repeat(len+2))
  
  return wrapped
}