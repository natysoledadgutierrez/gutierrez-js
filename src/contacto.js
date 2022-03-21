
document.querySelector("#nombre").addEventListener("focusout", validarVacio);
document.querySelector("#apellido").addEventListener("focusout", validarVacio);
document.querySelector("#email").addEventListener("focusout", validarVacio);
document.querySelector("#asunto").addEventListener("focusout", validarVacio);
document.querySelector("#texto").addEventListener("focusout", validarVacio);

document.querySelector("#texto").addEventListener("keyup", teclaEnter);