import {Move} from "./Move";

export class Poke{
    nombre:String;
    vida:number;
    defensa:number;
    movimientos:Array<Move>
    constructor(nombre:String,vida:number,defensa:number,movimientos:Array<Move>){
        this.nombre=nombre;
        this.vida=vida;
        this.defensa=defensa;
        this.movimientos=movimientos;
    }
    
    recibirAtaque(daño:number,defensa:number){
        if(Math.random()<0.15){
            console.log(this.nombre+" a esquivado el ataque!");
        }else{
            if(daño>0){
                let tempvida = this.vida-(daño/this.defensa);
                this.vida= tempvida<0?0:tempvida;
                console.log(this.nombre+" a recivido "+daño/this.defensa+" puntos de daño");
            }
            if(defensa<1){
                this.defensa=(this.defensa-defensa);
                console.log("la defensa de "+this.nombre+" a bajado ");
            }
        }
    }
}