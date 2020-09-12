// Simple class to work with users of type Persons AND
// A simple object to work with users

class Person {

    // constructor with the basics elements to label a person
    constructor(name, lastName, yearOfBirth, sex, citizenship) {
        this.name = name
        this.lastName = lastName
        this.yearOfBirth = yearOfBirth
        this.sex = sex
        this.citizenship = citizenship
    }

    // getters
    getFullName() {
        return this.name + " " + this.lastName
    }

    getAge() {
        let year = new Date()
        return year.getFullYear() - this.yearOfBirth
    }
}

let maja = new Person("Jota", "Senator", 1981, "male", "cuban")
console.log("Algunos majas se llaman: " + maja.getFullName() + " y tienen: " + maja.getAge() + " años de edad.")

// less elegant but very use
const singer = {
    name: "Taylor",
    lastName: "Swift",
    yearOfBirth: 1990,
    sex: "female",
    citizenship: "american",
    getFullName: function() { return this.name + " " + this.lastName },
}

console.log(singer.getFullName())

const painter = {
    name: "Pablo",
    lastName: "Picapiedra",
    yearOfBirth: 1900,
    sex: "female",
    citizenship: "español",
    getFullName: function() { return this.name + " " + this.lastName },
    getSex: function() { return this.sex },
    setName: function(newName) { this.name = newName },
    setLastName: function(newLastName) { this.lastName = newLastName },
    setSex: function(newSex) { this.sex = newSex }
}

painter.setLastName("Picasso")
painter.setSex("macho")
console.log(painter.getFullName() + " era re-" + painter.getSex())

//template literals
console.log(`${painter.getFullName()} era re-${painter.getSex()}`)

//omoshiroi ne

let Persona = {
    nombre: 'Maykel',
    edad: 39,
    sexo: 'masculino',
    pais: 'Cuba'
    };
let Heroe = {
    nombre: 'Saitama',
    edad: 25,
    sexo: 'masculino',
    pais: 'Japon',
    heroe: true
};
let newHeroe = Object.assign( {}, Heroe, Persona)
//newHeroe
//Object { nombre: "Maykel", edad: 39, sexo: "masculino", pais: "Cuba", heroe: true }

