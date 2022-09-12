/*
    ===== Código de TypeScript =====
*/
interface Pasajero{
    nombre:string,
    hijos?: string[]
}

const pasajero1:Pasajero={
    nombre: "Ivan"
}

const pasajero2:Pasajero={
    nombre:"Melissa",
    hijos: ["Natalia","Gabriel"]
}

function imprimirHijos(Pasajero:Pasajero):void{
    const cuentosHijos=Pasajero.hijos?.length || 0;

    console.log(cuentosHijos);
}

imprimirHijos(pasajero1);