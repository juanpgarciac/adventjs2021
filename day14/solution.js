function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  let shouldbe = (1 + ids.length) * (ids.length) / 2
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return shouldbe - ids.reduce(reducer)
}