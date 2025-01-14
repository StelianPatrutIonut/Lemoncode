ejercicio3Clone();
ejercicio3Merge();

/* 
EJERCICIO 3 ClONE MERGE: Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target
*/
function ejercicio3Clone(){
    function clone(source){
        return{...source};
    }

    const objeto ={
        nombre: "Irene",
        edad: 30,
        pais: "España"
    };

    const objetoClonado = clone(objeto);
    console.log(objetoClonado);
    //console.log(objeto === objetoClonado);

}

function ejercicio3Merge(){
    function merge(source, target){
        return{...target,...source};
    }
    const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
    const b = { name: "Luisa", age: 31, married: true };

    const resultado = merge(a,b);
    console.log(resultado);


}