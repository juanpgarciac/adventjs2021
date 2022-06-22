function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!
  let obj = {}
   collection.forEach((x)=>{ 
     let index = (typeof it === 'function') ? it(x) : x[it];
     obj[index] = obj[index] ?? []
     obj[index].push(x)       
   })
  return obj
}