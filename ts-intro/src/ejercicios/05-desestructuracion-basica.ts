/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen:number,
    segundo: number,
    cancion: string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio: number
}

const reproductor: Reproductor={
    volumen:90,
    segundo:35,
    cancion:"NOSE",
    detalles: {
        autor:"Yo",
        anio:2022
    }
}
const autor="Fulano";

const {volumen,segundo,cancion,detalles:{autor:autorDetalle}}=reproductor;
//const {autor}=detalles;

// console.log("El volumen actual de: ",volumen);
// console.log("El segundo actual de: ",segundo);
// console.log("El cancion actual de: ",cancion);
// console.log("El autor es: ",autorDetalle);

//Desestructuracion de Objetos
const dbz:string[]=["Goku","Vegeta","Trunks"];
const [goku,vegeta,trunks]=dbz;
console.log("Personaje 1: ",goku);
console.log("Personaje 2: ",vegeta);
console.log("Personaje 3: ",trunks);