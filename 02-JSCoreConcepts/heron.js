// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7




// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let s = (b,c,h) => {
    const p = (b+c+h)/2
    s = Math.sqrt(p*(p-b)*(p-c)*(p-h))
    return `Pole trójkąta o bokach, ${b}, ${c} oraz ${h} wynosi ${s}`
}

console.log( s(b,c,h) );