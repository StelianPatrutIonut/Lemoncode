
/*
EJERCICIO 4:Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP:
 Existe un método de Array.prototype que te ayudará a buscar según un patrón.
*/ 
interface libro{
    tituloLibro : string;
    estaLeido: boolean;
}
const libros : libro[] = [
    { tituloLibro: "Harry Potter y la piedra filosofal", estaLeido: true },
    { tituloLibro: "Canción de hielo y fuego", estaLeido: false },
    { tituloLibro: "Devastación", estaLeido: true },
  ];
console.log(isBookRead(libros,"Harry Potter y la piedra filosofal"));



function isBookRead(libros: libro[],tituloLibro : string) : boolean{

    const leido = libros.find(leido => leido.tituloLibro === tituloLibro);

    if(leido){
        return true;
    }else{
        return false;
    }
}
