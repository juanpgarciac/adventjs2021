function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  let xmas = new Date('Dec 25, 2021');
  return Math.ceil( (xmas - date) / (1000 * 60 * 60 * 24))
}