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

let sendDataOk = ['fname', 'lname', 'email']  // caja madre para que se vaya llenando con las cajas de cada sección, cuando esté completa, se manda el formulario. 
//Todos los campos estarán correctamente rellenados


// ****** COMPROBACIÓN NOMBRE *******

let regexNum = /\d+/  // expresión regular para números

document.getElementById('helpName').style.display = "none" //para que no salga el mensaje de 'error'

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
        sendDataOk.splice(sendDataOk.indexOf('fname'), 1)  // cuando el apartado de fname está OK, se rellena la 1º posición del array sendDataOk (se va completando la cajita)
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
        sendDataOk.splice(sendDataOk.indexOf('lname'), 1) // cuando el apartado de lname está OK, se rellena la 2º posición del array sendDataOk (se va completando la cajita)
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
        sendDataOk.splice(sendDataOk.indexOf('email'), 1) // cuando el apartado de lname está OK, se rellena la 3º posición del array sendDataOk (se va completando la cajita)
    }
})

// ****** COMPROBACIÓN MOTIVO DE CONTACTO - INPUT RADIO *******

let motiveSelection = document.getElementById('motive')
motiveSelection.style.display = "none"


//función para saber si alguno de los input radio está seleccionado o no, si está == true, sino false.
function checkIfTrue(...params) {
    for (let param of params){
        if(param.checked){      //por defecto, son siempre true
            return [true, param.value]  //para que me devuelva en 1º posición el booleano y en la 2º la opción que ha clicado
        }
    }
    return [false]
}


let checkbox = document.getElementById('accept')
let agreement = document.getElementById('agreement')
agreement.style.display = "none"

// funcion para enviar el formulario
document.getElementById('sendOK').addEventListener('click', () => {
    
    // elemento formulario
    let form = document.getElementById('form')

    // comprobación input radius si alguno no esta checkeado no envio form si hay alguno checkeado sigo la ejecución
    let isMotivationChecked = checkIfTrue(      //llamo a la función que he creado para saber si da true o false el input radio
        document.getElementById('optionOne'),   // llamo a cada una de las opciones, sin checked ni value, así cojo el elemento entero
        document.getElementById('optionTwo'),
        document.getElementById('optionThree'),
        )
        if (!isMotivationChecked[0]){   //indico posición para saber 1º si es true o false
            document.getElementById('contorno').focus()
            document.getElementById('motive').style.display = ""
            return              //no me devuelve nada porque es erróneo
        }
    
        
        // compruebo que los terminos y condiciones esten checkeados
        if(checkbox.checked){
            agreement.style.display = "none"
            
            // una vez ya esta check los terminos y condiciones,
            // compruebo los campos obligatorios (porque los usuarios son imbeciles y pueden no haberlos rellenado (y si no interactuan el evento
            // onchange y la validacion no salta))
            if (sendDataOk.length == 0){
                // envío el formulario
                console.log({"name": fname.value, "surname": lname.value, "email": email.value, "motivation": isMotivationChecked[1]});
                form.submit()           //me devuelve por consola un objeto con los datos que ha metido el cliente, así obtendo la info por los value
                
                // relleno mi senddataok que es lo que compruebo para enviar el form
                sendDataOk = ['fname', 'lname', 'email']
                
                //por cada apartado del formulario los recorro y le aplico un valor de string vacio
                sendDataOk.forEach(element => {
                    document.getElementById(element).value = ""
                })
                checkbox.checked = false                    //al mandar el form, pongo todo a 0 para que se resetee
                document.getElementById('optionOne').checked = false
                document.getElementById('optionTwo').checked = false
                document.getElementById('optionThree').checked = false
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
}) 

