class Persona {
    constructor (peso, altura, añoNacimiento)
    {
    this.nombre = 'Marta'
    this.apellido = 'Pérez'
    this.lugarNacimiento = 'Tenerife'
    this.peso = peso
    this.altura = altura
    this.yearOfBirth = añoNacimiento
    this.hobbies = ['cocinar', 'leer', 'senderismo']
    }
    calcularIMC()
    {
        return Math.round(this.peso/(this.altura*this.altura))
    }
    calcularEdad()
    {
        return 2023 - this.yearOfBirth
    }
    printAll()
    {
        for (let atributos in this) {
            console.log(atributos + ' - ' + this[atributos])
        }
    }
    printHobbies()
    {
        return this.hobbies
    }
    
}

module.exports = Persona;

