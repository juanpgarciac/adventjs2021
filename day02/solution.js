function listGifts(letter) {
    // ¡Tú puedes!
    let regalos = {};
    letter.split(' ').forEach( (gift) => {
        if(typeof regalos[gift] !== 'undefined'){
            ++regalos[gift]
        }else{
            if(gift.trim().length > 0 && gift[0] !== '_')
            regalos[gift] = 1
        }
    })
    return regalos
}