
/*
    ===== Código de TypeScript =====
*/

let habilidades=[1,"fernando",true,[]];


let habi:string[]=["hola","yo","soy"];
//habi.push(true);

interface Personaje {
    nombre: string,
    hp: number,
    habilidades:string[],
    puebloNatal?: string
}

const personaje:Personaje ={
    nombre: "Ivan",
    hp:100,
    habilidades:["fernando","hola"]
}

personaje.puebloNatal='LP';

console.table(personaje);