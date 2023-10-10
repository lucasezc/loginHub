// //Efect text

// const texto = `In a digital era where privacy and security are paramount, our project endeavors to provide
// a
// reliable solution for user authentication. Stay tuned for updates as we continue to develop
// and
// refine this exciting web application.`;
// const delay = 30; // Tiempo de retraso entre cada caracter (en milisegundos)
// let index = 0;

// function escribirTexto() {
//     if (index < texto.length) {
//         document.getElementById('pElement').textContent += texto.charAt(index);
//         index++;
//         setTimeout(escribirTexto, delay);
//     }else {
//         // Agregar una pausa de 1000 milisegundos (1 segundo) antes de mostrar el botón "Leer más"
//         setTimeout(function () {
//             document.getElementById('readMore').style.display = 'block';
//         }, 0); // Cambia el valor (en milisegundos) para ajustar la duración de la pausa
//     }
// }

// // Llama a la función para iniciar el efecto de máquina de escribir cuando se carga la página
// window.onload = escribirTexto;


// Pop up

const btnAccount = document.getElementById("btn-sgn");
const signUp = document.getElementById("sign-up");
const wrapperContent = document.getElementById("wrapper-content");
const background = document.getElementById("background");
const wrapper = document.getElementById("wrapper");
const navBtn = document.getElementById("navBtn");
const readMore = document.getElementById("readMore");
const btnClose = document.getElementById("btnClose");



btnAccount.addEventListener("click", () => {
    signUp.style.display = "flex";
    wrapperContent.style.filter = "blur(2rem)";
    wrapper.style.boxShadow = "box-shadow: 0rem 0.3125rem 1.25rem 0.0625rem rgb(75, 103, 106);";
    wrapper.style.background = "rgba(0, 0, 0, 1.416);";
    navBtn.style.display = "none";
    readMore.style.display = "none";

    btnClose.addEventListener("click", () => {
        signUp.style.display = "none";
        wrapperContent.style.filter = "blur(0)";
        navBtn.style.display = "flex";
        readMore.style.display = "block";
    });

});
