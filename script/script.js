function showMenuCollapsed() {
    let element = document.getElementById("menu");
    if(element.classList[1] == 'display-none'){
        element.classList.remove("display-none");
    }else{
        element.classList.add("display-none");
    }
  }


 /*****Validaciones del formulario *****/
    /**** Validar nombres ****/
//     if (fname.length > 3 && fname.length <= 30) {
//         console.log("nombre OK: " + fname);
//     }
//     else {
//         alert("Nombre tiene que que estar entre 3 y 30");
//         formValidated = false;
//         // Cambios en el DOM para que se vea el error
//         //...
//         //...
//     }

//     /**** Validar apellidos ****/
//     if (lname.length > 3 && lname.length <= 30) {
//         console.log("apellidos OK:" + lname);
//     }
//     else {
//         alert("Apellidos tiene que que estar entre 3 y 30");
//         formValidated = false;
//         // Cambios en el DOM para que se vea el error
//         //...
//         //...
//     }

//     /**** Validar email ****/
//     /*
//     //Con RegExp
//         let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (email.match(mailformat))
//     */

//     if (email.endsWith(".com")) {
//         console.log("apellidos OK:" + lname);
//     } else {
//         alert("Sólo dominio .com en mi empresa");
//         formValidated = false;
//         // Cambios en el DOM para que se vea el error
//         //...
//         //...
//     }

//     /**** Condiciones de uso ****/
//     console.log("***¿aceptas?***");
//     console.log(event.target.elements.accept.checked);
//     let accept = event.target.accept.checked;

//     if (accept == true) {
//         console.log("Ha aceptado las condiciones");
//     } else {
//         alert("Tienes que aceptar las condiciones");
//         formValidated = false;
//     }

//     // Para hacer el envío final del formulario
//     if (formValidated == true) {
//         alert("Formulario validado con éxito");
//         // Reanuda el envío del formulario
//         event.target.submit();
//     }
//     else {
//         alert("Fomulario no validado");
//     }
// })

let sendDataOk = ['fname', 'lname', 'email']


// ****** COMPROBACIÓN NOMBRE *******

let regexNum = /\d+/

document.getElementById('helpName').style.display = "none"
let fname = document.getElementById('fname')
fname.addEventListener('change', () => {
    if (fname.value.length < 3 || fname.value.length > 40 || regexNum.test(fname.value)) {
        fname.style.border = "#ff8fa3 outset 3px"
        fname.style.backgroundColor = "#D6CCC2"
        document.getElementById('helpName').style.display = ""
    }else{
        fname.style.border = ""
        fname.style.backgroundColor = ""
        document.getElementById('helpName').style.display = "none"
        sendDataOk.splice(sendDataOk.indexOf('fname'), 1)
    }
})



// ****** COMPROBACIÓN APELLIDO *******

document.getElementById('helpLname').style.display = "none"
let lname = document.getElementById('lname')
lname.addEventListener('change', () => {
    if (lname.value.length < 3 || lname.value.length > 40 || regexNum.test(lname.value)) {
        lname.style.border = "#ff8fa3 outset 3px"
        lname.style.backgroundColor = "#D6CCC2"
        document.getElementById('helpLname').style.display = ""
    }else{
        lname.style.border = ""
        lname.style.backgroundColor = ""
        document.getElementById('helpLname').style.display = "none"
        sendDataOk.splice(sendDataOk.indexOf('lname'), 1)
    }
})



// ****** COMPROBACIÓN EMAIL *******

let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
let email = document.getElementById('email')
document.getElementById('helpEmail').style.display = "none"
email.addEventListener('change', () => {
    if(!regex.test(email.value)){ //el .test() me comprueba que el valor del campo email cumpla los requisitos de la regex
        email.style.border = "#ff8fa3 outset 3px"
        email.style.backgroundColor = "#D6CCC2"
        document.getElementById('helpEmail').style.display = ""
    }else{
        email.style.border = ""
        email.style.backgroundColor = ""
        document.getElementById('helpEmail').style.display = "none"
        sendDataOk.splice(sendDataOk.indexOf('email'), 1)
    }
})





let checkbox = document.getElementById('accept')
let agreement = document.getElementById('agreement')
agreement.style.display = "none"

// funcion para enviar el formulario
function okSend() {
    // elemento formulario
    let form = document.getElementById('form')

    // compruebo que los terminos y condiciones esten checkeados
    if(checkbox.checked){
        agreement.style.display = "none"

        // una vez ya esta check los terminos y condiciones,
        // compruebo los campos obligatorios (porque los usuarios son imbeciles y pueden no haberlos rellenado (y si no interactuan el evento
        // onchange y la validacion no salta))
        if (sendDataOk.length == 0){
            // envío el formulario
            form.submit()

            // relleno mi senddataok que es lo que compruebo para enviar el form
            sendDataOk = ['fname', 'lname', 'email']

            //por cada apartado del formulario los recorro y le aplico un valor de string vacio
            sendDataOk.forEach(element => {
                document.getElementById(element).value = ""
            })
            checkbox.checked = false
        }else{
            sendDataOk.forEach(element => {
                document.getElementById(element).style.border = "#ff8fa3 outset 3px"
                document.getElementById(element).style.backgroundColor = "#D6CCC2"
                document.getElementById(element).focus()
            })
        }
    }else{


        // sino le muestro el error y no envio el form
        agreement.style.display = ""
    }
}
