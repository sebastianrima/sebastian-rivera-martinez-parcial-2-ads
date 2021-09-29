export class Move{
    nombre:String;
    mulDefensa:number;
    daño:number;

    constructor(nombre:String,mulDefensa:number,daño:number){
        this.nombre=nombre;
        this.mulDefensa=mulDefensa;
        this.daño=daño;
    }
}