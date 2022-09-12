/*
    ===== Código de TypeScript =====
*/
function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString=queTipoSoy("Hola Mundo");
let soyNumero=queTipoSoy(100);

let soyexplicito=queTipoSoy<number>(100);