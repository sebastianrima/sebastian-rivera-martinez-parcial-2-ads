import {Pokemon} from "./Pokemon";
import ps from "prompt-sync";
const prompt: ps.Prompt = ps({sigint:true});

const misPokemon = Pokemon.getInstance();
var current = ["Pikachu","Geodude"];
let start:boolean=true;

abstract class AbstractClass {
    
    public template(turno:boolean){
        start?this.inicio():null
        turno?this.AshAtaca():this.BrockAtaca();
        this.setCurrentPokes();
    }

    protected inicio(){
        console.log("Narrador: continuando con su meta de convertirse en el mejor entrenador pokemon,"+
        "ash finalmente encuentra una salida del bosque verde y esta listo para enfrentarse"+
        "al lider del gimnasio de ciudad plateada, ¡Brock!");
        console.log("El lider de gimnasio Brock a aceptado tu duelo");
        console.log("--------------------------------------------------");
        start=false;
    }
    protected abstract setCurrentPokes(): void
    protected abstract AshAtaca(): void
    protected abstract BrockAtaca(): void
}

class game extends AbstractClass{  

    fin: boolean=false;

    protected setCurrentPokes(){
        misPokemon.AshPoke.forEach(Poke=>{
            if(current[0]==Poke.nombre&&Poke.nombre!="Pidgeotto"){
                if(Poke.vida<=0){
                    console.log(Poke.nombre+" se ha debilitado!\nAsh a sacado a Pidgeotto")
                    console.log("--------------------------------------------------");
                    current[0]="Pidgeotto";
                }
            }
            if(current[0]==Poke.nombre){
                if(Poke.vida<=0){
                    console.log(Poke.nombre+" se ha debilitado!\n Has perdido la battalla pokemon")
                    this.fin=true;
                }
            }
        })
        misPokemon.BrockPoke.forEach(Poke=>{
            if(current[1]==Poke.nombre&&Poke.nombre!="Onix"){
                if(Poke.vida<=0){
                    console.log(Poke.nombre+" se ha debilitado!\n Brock a sacado a Onix")
                    console.log("--------------------------------------------------");
                    current[1]="Onix";
                }
            }
            if(current[1]==Poke.nombre){
                if(Poke.vida<=0){
                    console.log(Poke.nombre+" se ha debilitado!\n Felicidades, has ganado la medalla de liga plateada")
                    this.fin=true;
                }
            }
        })
    }

    private preguntaCerrada=async():Promise<String>=>{
        let res!:string;
        misPokemon.AshPoke.forEach(Poke => {
            if(Poke.nombre==current[0]){
               let repo= prompt("Que debe hacer "+Poke.nombre+"?\n"+"1. "+Poke.movimientos[0].nombre+" 2. "+Poke.movimientos[1].nombre)
               console.log("--------------------------------------------------");
               res=repo;
            }
        });
        return(res);
    }


    protected async AshAtaca(){
        let answer = await this.preguntaCerrada();
        misPokemon.AshPoke.forEach(Poke => {
            if(Poke.nombre==current[0]){
                    switch(answer){
                        case "1":
                            console.log(Poke.nombre+" ha usado "+Poke.movimientos[0].nombre)
                            misPokemon.BrockPoke.forEach(enemyPoke=>{
                                if(enemyPoke.nombre==current[1]){
                                    enemyPoke.recibirAtaque(Poke.movimientos[0].daño,Poke.movimientos[0].mulDefensa)
                                    console.log("a "+enemyPoke.nombre+" le quedan "+enemyPoke.vida+" puntos de vida")
                                    console.log("--------------------------------------------------");
                                }
                            })
                        break;
                        
                        case "2":
                            console.log(Poke.nombre+" ha usado "+Poke.movimientos[1].nombre)
                            misPokemon.BrockPoke.forEach(enemyPoke=>{
                                if(enemyPoke.nombre==current[1]){
                                    enemyPoke.recibirAtaque(Poke.movimientos[1].daño,Poke.movimientos[1].mulDefensa)
                                    console.log("a "+enemyPoke.nombre+" le quedan "+enemyPoke.vida+" puntos de vida")
                                    console.log("--------------------------------------------------");
                                }
                            })
                        break;
                        default:
                        console.log("Ingrese una respuesta por favor");
                    }
            }
        })
    }

    protected async BrockAtaca(){
        await prompt("Enter para continuar")
        misPokemon.BrockPoke.forEach(Poke => {
            if(Poke.nombre==current[1]){
                let answer:number = Math.random();
                    if(answer<0.6){
                        console.log("--------------------------------------------------");
                            console.log(Poke.nombre+" ha usado "+Poke.movimientos[0].nombre)
                            misPokemon.AshPoke.forEach(enemyPoke=>{
                                if(enemyPoke.nombre==current[0]){
                                    enemyPoke.recibirAtaque(Poke.movimientos[0].daño,Poke.movimientos[0].mulDefensa)
                                    console.log("a "+enemyPoke.nombre+" le quedan "+enemyPoke.vida+" puntos de vida")
                                    console.log("--------------------------------------------------");
                                }
                            })
                        }else{
                            console.log("--------------------------------------------------");
                            console.log(Poke.nombre+" ha usado "+Poke.movimientos[1].nombre)     
                            misPokemon.AshPoke.forEach(enemyPoke=>{
                                if(enemyPoke.nombre==current[0]){
                                    enemyPoke.recibirAtaque(Poke.movimientos[1].daño,Poke.movimientos[1].mulDefensa)
                                    console.log("a "+enemyPoke.nombre+" le quedan "+enemyPoke.vida+" puntos de vida")
                                    console.log("--------------------------------------------------");
                                }
                            })
                    }
            }
        })
    }
}

export default game

