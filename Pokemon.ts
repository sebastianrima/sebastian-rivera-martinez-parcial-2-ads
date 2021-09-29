import {Poke} from "./Poke";
import {Move} from "./Move";

export class Pokemon{
    private static instance: Pokemon;
    public AshPoke: Array<Poke>;
    public BrockPoke: Array<Poke>;

    private constructor() {
        this.AshPoke= [
            new Poke("Pikachu",15,1,[new Move("impactrueno",1,10), new Move("Rugido",0.15,0)]),
            new Poke("Pidgeotto",15,1.2,[new Move("Tornado",1,15), new Move("Danza pluma",0.1,0)])
        ]
        this.BrockPoke=[
            new Poke("Geodude",10,1.5,[new Move("Placaje",1,5), new Move("Azote",0.13,0)]),
            new Poke("Onix",15,1.5,[new Move("Terremoto",1,15), new Move("Golpe roca",0.1,0)])
        ]
    }

    public static getInstance(): Pokemon {
        if(!Pokemon.instance){
            Pokemon.instance = new Pokemon();
        }
        return Pokemon.instance
    }
}
