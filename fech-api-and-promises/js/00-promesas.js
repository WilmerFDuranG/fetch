const pedirAumento= new Promise((respolve,reject)=>{
    const tiempo =10;
    if(tiempo >=10){
        respolve('ya tengo el tiempo para pedir aumento de sueldo');
    }else{
        reject('todavia no puedo pedir aumento no tengo la antiguedad');
    }
})
console.log(pedirAumento);