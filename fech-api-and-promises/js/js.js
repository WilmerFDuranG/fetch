/* const retornaPersona =({nombre,edad}) =>{
    console.log (nombre,edad);
}
retornaPersona (persona);

const useContext =({clave,nombre,edad,rango = 'capitan'}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            
        }
    }
} */
/* 
const personajes = ['goku','vegueta','trunks'];
const [,p2,] = personajes;
console.log(p2);

const retornaArreglo =() =>{
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros); */

import {getHeroeById} from './index.js';
const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve,reject) =>{

        setTimeout (() =>{
            const p1 = getHeroById( id);
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'no se pudo encontrar el héroe' );
            }
        },2000)
    });

}

getHeroeByIdAsync(3)