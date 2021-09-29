# Parcial 2 Sebastian Rivera
## Contexto:
esta aplicacion busca simular un juego de pokemon, esta basado en la primera
batalla de gimnasio de la primera temporada de la serie, el programa esta desarrollado
en Typescript en el IDE VisualStudio Code
## Como ejecutar
para ejecutar el programa es necesario tener tsc node por lo que se necesitara tener node
instalado e instalar mediante a la consola ejecutando el tsc y typescript modules con los
siguientes comandos:
```
npm install
```
despues de esto ingresar a la direccion del proyecto en la consola y ejecutar el archivo con
```
ts-mpde app.ts
```
por ultimo seguir las instrucciones presentadas en la consola

## Patron de diseño Singleton
### Por que se uso este patron?
Fue necesario el uso de Singleton para que la clase "Pokemon" tuviera una unica instancia, ya
que a pesar de ser llamada tantas veces y de distintos lados, singlenton previene la creacion
de varias instancias de una misma clase, lo que nos ayuda a controlar el acceso a el recurso
"Pokemon"
### Donde se uso?
El patron Singleton se uso en la creacion de la clase "Pokemon" en el constructor pasandolo
de publico a privado lo que lo prohibe crear nuevas instancias
```typescript
private constructor() {}
public static getInstance(): Pokemon {
        if(!Pokemon.instance){
            Pokemon.instance = new Pokemon();
        }
        return Pokemon.instance
    }
```
```typescript
const misPokemon = Pokemon.getInstance();
```
## Patron de diseño Template Method
### Por que se uso este patron?
fue necesario el uso del patron Template Method para la creacion de un algoritmo en el que transcurre
todo el juego, esto nos ayuda a ahorrar codigo y modificar la manera en la que ocurren los eventos de
una manera mucho mas facil
### Donde se uso?
El patron Template Method fue usado en el ciclo principal del Juego, fue usado en toda la clase "Main",
utilizandola como la clase abstracta dentro de la cual se crea la pantilla e inicializan los metodos necesarios:
```typescript
abstract class AbstractClass {
    
    public template(turno:boolean){
        start?this.inicio():null
        turno?this.AshAtaca():this.BrockAtaca();
        this.setCurrentPokes();
    }

    protected inicio(){}
    protected abstract setCurrentPokes(): void
    protected abstract AshAtaca(): void
    protected abstract BrockAtaca(): void
}
```
y tambien como la implementacion concreta:
```typescript
class game extends AbstractClass{)
```
por ultimo, tambien es usado en la clase app para llamar y ejecutar el ciclo necesario para que funcione el algoritmo:
```typescript
async function ciclo(){
    while(!juego.fin){
        await juego.template(turno);
        turno=!turno;
    }
}
```
