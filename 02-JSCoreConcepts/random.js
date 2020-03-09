const getRandomInt = (min,max) =>Math.floor(Math.random() *(max - min)) +min;

const print = (count, min, max) => {
    for(let i=0;i<count;i++) {
        console.log(getRandomInt(min,max))
    }
}

print(10,5,20)