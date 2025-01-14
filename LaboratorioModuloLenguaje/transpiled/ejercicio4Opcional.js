const libros = [
    { tituloLibro: "Harry Potter y la piedra filosofal", estaLeido: true },
    { tituloLibro: "Canción de hielo y fuego", estaLeido: false },
    { tituloLibro: "Devastación", estaLeido: true },
];
console.log(isBookRead(libros, "Harry Potter y la piedra filosofal"));
function isBookRead(libros, tituloLibro) {
    const leido = libros.find(leido => leido.tituloLibro === tituloLibro);
    if (leido) {
        return true;
    }
    else {
        return false;
    }
}
