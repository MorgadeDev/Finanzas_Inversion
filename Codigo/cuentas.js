class Usuario{
    constructor(firstName,lastName,age,mail,telefone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.mail = mail;
        this.telefone = telefone;
    }

    

}
//Creacion de 2 objetos Usuario
const felipe = new Usuario("Felipe","Morgade",21,"felipemorgade007@gmail.com",2233020613);
const toto = new Usuario("Tomas","llull",21,"toto@gmail.com",2235955953);

//Creacion de un arreglo de usuarios.
const usuarios = [felipe,toto];

// Convertir el arreglo de usuarios a una cadena JSON
const jsonUsuarios = JSON.stringify(usuarios);

// Guardar la cadena JSON en un archivo local
const fs = require("fs");
fs.writeFileSync("Usuarios.json",jsonUsuarios);

// Mostrando el archivo JSON
console.log(jsonUsuarios);