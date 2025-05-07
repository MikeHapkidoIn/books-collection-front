const usersButton = document.getElementById("users");
const librosButton = document.getElementById("libros");
const containerUsuarios = document.getElementById("containerUsuarios");
const containerLibros = document.getElementById("containerLibros");



async function getUsers() {
    const response = await fetch("http://localhost:3000/users")
    if (!response.ok){
        throw new Error("Error al cargar Usuarios desde la API");
           
    }

    const data = await response.json()    
    console.log(data)
    data.map(({nombre, apellidos, correo, coleccion, wishlist})=> {
        containerUsuarios.innerHTML +=  `<div class="usercard">
        <h3>${nombre} ${apellidos}</h3>
        <p>Correo: ${correo}</p>        
        <p>Libros deseados:${wishlist}</p>
        <p>Coleccion de libros: ${coleccion}</p>       
        
        </div>
        `; 

    })
}



async function getBooks() {
    const response = await fetch("http://localhost:3000/books")
    if (!response.ok){
        throw new Error("Error al cargar los libros desde la API");
           
    }

    const data = await response.json()
    console.log(data)
    data.map(({autor, imagen, titulo, fechaPublicacion})=>{
        containerLibros.innerHTML +=  `<div class="usercard">
        <h3>Titulo: ${titulo}</h3>
        <p>Autor: ${autor}</p>        
        <p>Fecha de publicacion:${fechaPublicacion}</p>
        <img src = ${imagen} alt = ${titulo} >
                  
        </div>
        `; 
    })
}



usersButton.addEventListener ("click", () =>{
    getUsers()
})

librosButton.addEventListener("click",() =>{
    getBooks()
})

