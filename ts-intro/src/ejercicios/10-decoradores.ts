/*
    ===== Código de TypeScript =====
*/

function classdecorador<T extends{new (...args:any[]):{}}>(
    constructor: T
){
    return class extends constructor{
        newProperty="New property";
        hello="override";
    }
}

@classdecorador
class MiSuperClase{
    public miPropiedad: string='ABC123';

    imprimir(){
        console.log('Hola Mundo')
    }
}

console.log(MiSuperClase);
const miClase=new MiSuperClase();
console.log(miClase.miPropiedad);