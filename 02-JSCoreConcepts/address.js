title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
function withoutFormatting() {
    console.log(title, name, surname)
    console.log('ul.', street)
    console.log(zip, city)
    console.log(country)
}

function withFormatting() {
    console.log(`${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country}`)
}

withoutFormatting();
withFormatting();