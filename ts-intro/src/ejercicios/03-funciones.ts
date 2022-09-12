/*
    ===== Código de TypeScript =====
*/
function sumar(a: number,b: number){
    return a+b;
}

const sumarFlecha =(a:number,b:number):number=>{
    return a+b;
}

function multiplicar(numero: number, otroNumero?:number, base:number=2):number{
    return numero * base;
}

// const resultado= multiplicar(1,0,10);

// console.log(resultado);
interface PersonajeLOR{
    nombre: string;
    pv:number;
    mostrarHP:()=>void;
}

//Void no retorna nada
function curar(personaje:PersonajeLOR, curarX:number): void {
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR={
    nombre:"Ivan",
    pv:50,
    mostrarHP(){
        console.log("puntos de vida", this.pv)
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHP();