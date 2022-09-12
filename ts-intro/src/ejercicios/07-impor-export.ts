import { calcularISV, Producto } from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Producto[]=[
    {
        desc:"telefono 1",
        precio:100
    },
    {
        desc:"telefono 2",
        precio:200
    }
];

const [total,isv]=calcularISV(carritoCompras);

console.log("Total: ",total);
console.log("ISV: ",isv);