
ejercicio2();
/*
EJERCICIO 2: Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators
OPCIONAL:Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
*/
function ejercicio2(){
    const concat = (a,b) =>{
       return [...a,...b];
    }
    const array = ["Javi",23,false];
    const array2 = ["Sergio","Merce","Lola"];
    console.log(concat(array,array2));
    console.log(array);
    console.log(array2);

}

function ejercicio2Opcional(){
    const concat = (...array) =>{
        return array.reduce((acc, array) => [...acc,...array],[])
    }
    const array1 = [1, 2];
    const array2 = [3, 4];
    const array3 = [5, 6];

    const resultado = concat(array1,array2,array3);
    console.log(resultado);


}