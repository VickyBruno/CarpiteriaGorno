//MENU 

document.getElementById("header").innerHTML = `
        <div class="container-logo">
            <img class="logo-header" src="./img/Logo-SinFondo-Menu.png" alt="">
            <img class="logo-header-name" src="./img/name-menu.png" alt="">
            

        </div>

        <button class="boton-hambuerguesa"><i class="fa-solid fa-bars"></i></button>

        <nav class="nav">
            <ul class="list-nav">

                <li class="section"><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a class="dropbtn" onclick="mostrar();" href="#">Servicios <i
                            class="fa-solid fa-chevron-down"></i></a>

                    <ul class="dropdown-content">
                        <li class="options"><a href="./servicios/servicioPuertas.html">Puertas y portones</a></li>
                        <li class="options"><a href="./servicios/servicioTarimas.html">Tarimas</a></li>
                        <li class="options"><a href="./servicios/servicioCocinas.html">Cocinas</a></li>
                        <li class="options"><a href="./servicios/servicioPergolas.html">Pérgolas y porchadas</a></li>
                        <li class="options"><a href="./servicios/servicioArmarios.html">Armarios</a></li>
                        <li class="options"><a href="./servicios/servicioVentanas.html">Ventanas y cristaleras</a></li>
                        <li class="options"><a href="./servicios/servicioTrabajosPersonalizados.html">Trabajos
                                personalizados</a></li>
                    </ul>

                </li>
                <li class="section"><a href="./galeria.html">Galeria</a></li>
                <li class="section"><a href="contacto.html">Contacto</a></li>
            </ul>

        </nav>`

//MENU DESPLEGABLE

const botonHamburguesa = document.querySelector(".boton-hambuerguesa");
const nav = document.querySelector(".nav");

botonHamburguesa.addEventListener('click', () => {
    nav.classList.toggle('open');
})


//SubMenu Desplegable
const botonSubMenu = document.querySelector(".dropbtn");
const movSubMenu = document.querySelector(".dropdown-content");




botonSubMenu.addEventListener('click', () => {
    movSubMenu.classList.toggle('active');
})





/* funcion para botones anteriores.
function mostrar(){
    document.querySelector(".dropdown-content").style.display = 'block';
}
function ocultar(){
    document.getElementById('sub-section-contenedor').style.display = 'none';
}

*/
