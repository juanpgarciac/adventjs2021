function countDecorations(bigTree) {
  // ¡No olvides compartir tu solución en redes!
   return bigTree == null ? 0 : bigTree.value + countDecorations(bigTree.left) + countDecorations(bigTree.right)
 }