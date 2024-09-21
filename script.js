const mensajeInicial = document.getElementById('mensaje-inicial');
const botonMostrar = document.getElementById('mostrar-imagenes');
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image');
const descripcion = document.getElementById('descripcion');

botonMostrar.addEventListener('click', () => {
    mensajeInicial.style.display = 'none';
    imageContainer.style.display = 'flex';
    descripcion.style.display = 'block';
    // Mostrar la imagen
    images[0].style.display = 'block';
});
