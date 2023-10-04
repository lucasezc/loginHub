//Efect text

const texto = `In a digital era where privacy and security are paramount, our project endeavors to provide
a
reliable solution for user authentication. Stay tuned for updates as we continue to develop
and
refine this exciting web application.`;
const delay = 30; // Tiempo de retraso entre cada caracter (en milisegundos)
let index = 0;

function escribirTexto() {
    if (index < texto.length) {
        document.getElementById('pElement').textContent += texto.charAt(index);
        index++;
        setTimeout(escribirTexto, delay);
    }else {
        // Agregar una pausa de 1000 milisegundos (1 segundo) antes de mostrar el botón "Leer más"
        setTimeout(function () {
            document.getElementById('readMore').style.display = 'block';
        }, 0); // Cambia el valor (en milisegundos) para ajustar la duración de la pausa
    }
}

// Llama a la función para iniciar el efecto de máquina de escribir cuando se carga la página
window.onload = escribirTexto;


