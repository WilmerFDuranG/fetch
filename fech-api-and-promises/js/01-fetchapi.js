const URL_API = "data/campers.json";
//consumir JSON con Fetch API (objeto)
// cargar referencia a un boton

//agregar listener

//-------------------------------------
function loadData(){
    fetch(URL_API)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            viewHTML(data);    
        })
}
function viewHTML(myData){
    const divContenedor = document.querySelector('#contenedor');
    const {id,nombre,edad,ingles} = myData;
    //Mostrar los datos en el html
    divContenedor.innerHTML=/*html*/` 
    <p>Id: ${id}</p>
    <p>Nombre : ${nombre}</p>
    <p>Edad : ${edad}</p>
    <p>Nivel de ingles : ${ingles}</p>
    `
}

