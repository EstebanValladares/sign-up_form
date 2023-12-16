const form = document.querySelector('.formulario');
form.addEventListener('submit',validacion)

function validacion(e){
    e.preventDefault();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nom = document.querySelector('#nombre');
    let apell = document.querySelector('#apellido');
    let em = document.querySelector('#email');
    let cont = document.querySelector('#contraseña');

    let errorNombre = document.querySelector('.error-nom');
    let errorApellido = document.querySelector('.error-ape');
    let errorEmail = document.querySelector('.error-email');
    let errorPass = document.querySelector('.error-pass');


    
    if(nom.value === ''){
        const textoNUevo = document.createElement('p');
        nom.classList.add('icono-error');
        textoNUevo.textContent = 'First Name cannot be empty'
        errorNombre.appendChild(textoNUevo);
    }
    if(apell.value === ''){
        const textoNUevo = document.createElement('p');
        apell.classList.add('icono-error');
        textoNUevo.textContent = 'Last Name cannot be empty'
        errorApellido.appendChild(textoNUevo);
    }
    if(em.value === ''){
        const textoNUevo = document.createElement('p');
        em.classList.add('icono-error');
    }
    if(em.value === '' || !emailRegex.test(em.value)){
        const textoNUevo = document.createElement('p');
        em.classList.add('icono-error');
        textoNUevo.textContent = 'Looks like this is not an email'
        errorEmail.appendChild(textoNUevo);
    }
    if(cont.value === ''){
        const textoNUevo = document.createElement('p');
        cont.classList.add('icono-error');
        textoNUevo.textContent = 'Password cannot be empty'
        errorPass.appendChild(textoNUevo);
    }
}
