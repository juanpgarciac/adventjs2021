function checkIsSameTree(treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!
 return (treeA == null && treeB==null) || (treeA?.value === treeB?.value && checkIsSameTree(treeA.left, treeB.left) && checkIsSameTree(treeA.right, treeB.right));
 }