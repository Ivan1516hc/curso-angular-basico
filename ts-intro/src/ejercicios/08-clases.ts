/*
    ===== Código de TypeScript =====
*/
interface Heroei{
    alterEgo?:string;
    edad?:number;
    nombreReal?:number
}
const batman:Heroei={
}

class PersonaNormal{

    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

class Heroe extends PersonaNormal{
    // alterEgo:string;
    // edad:number;
    // nombreReal:number

    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string
        ){
            super(nombreReal,"NY USA");
        }
}

const ironman= new Heroe("Ironman",45,"Tony");

console.log(ironman);

