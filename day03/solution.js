function isValid(letter) {
    // ¡No dejes que el Grinch gane!
     return letter.split(' ').every(gift =>  (/^\([a-zA-ZáéíóúñÑ]+\)$|^[a-zA-ZáéíóúñÑ]+$/g).test(gift))
}