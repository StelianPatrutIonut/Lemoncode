class slotMachine{
    constructor(){
        this.contadorMonedas = 0;
    }

    
    play(){
        this.contadorMonedas++;

        var moneda1 =  Math.random() < 0.5;
        var moneda2 =  Math.random() < 0.5;
        var moneda3 =  Math.random() < 0.5;
 
        if(moneda1 && moneda2 && moneda3){
            console.log(`Felicidades has ganado : ${this.contadorMonedas} moneda/s`);
            this.contadorMonedas = 0;
        }else{
            console.log("Lastima, prueba suerte otra vez");
        }
    
    }
}


const maquina = new slotMachine();

maquina.play();

maquina.play();

maquina.play();

maquina.play();

maquina.play();

maquina.play();

maquina.play();
