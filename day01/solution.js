function contarOvejas(ovejas) {
    // aquí tu magia
    return ovejas.filter(oveja => oveja.color === 'rojo' && oveja.name.match(/(?=.*(a))(?=.*(n))/i) )
}

