import{ getHeroeById } from './index';

const getHeroeByIdAsync = (id) => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout( () => {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            }else{
                reject('no se pudo encontrar el héroe' );
            }
        }, 2000 )

    })


}

getHeroeByIdAsync(3)
.then( console.log )
.catch( console.warn );