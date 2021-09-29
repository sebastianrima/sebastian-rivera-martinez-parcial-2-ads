import { COPYFILE_FICLONE } from "constants";
import Juego from "./Main";

let turno:boolean=true;
const juego= new Juego();

async function ciclo(){
    while(!juego.fin){
        await juego.template(turno);
        turno=!turno;
    }
    
}

ciclo();

