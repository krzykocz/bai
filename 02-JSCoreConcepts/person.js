class Person{
    constructor(name,surname){
    this.name = name
    this.surname = surname
    }
    withUppercaseSurname() {
        console.log(`${this.name} ${this.surname.toUpperCase()}`)
    }
    initials() {
        console.log(`${this.name.charAt(0)}${this.surname.charAt(0)}`)
    }
}

per1 = new Person('Jan','Nowak')
per2 = new Person('Krzysztof','Koczwara')
per1.withUppercaseSurname();
per1.initials();
per2.withUppercaseSurname();
per2.initials();