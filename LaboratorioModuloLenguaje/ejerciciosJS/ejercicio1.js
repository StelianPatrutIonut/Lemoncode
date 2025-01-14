
ejercicio1();
/*
Ejercicio 1: Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.ç
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
*/
function ejercicio1(){
    //ELEGIR EL ARRAY QUE QUIERAS PROBAR
    const array = ["Javi",23,false];
    const array2 = ["Sergio","Merce","Lola"];
    const array3 = [true,false,false];
    const array4 = [1.2,3,5];
    

    //HEAD
    const head = ([first]) => first;

    console.log(head(array));

    //TAIL
    const tail = ([first, ...rest]) => rest

    console.log(tail(array));

    //INIT
    const init = (array) => array.slice(0,-1);

    console.log(init(array));

    //LAST

    const last = (array) => array.slice(-1);
    console.log(last(array));

}
