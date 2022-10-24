var formulario = document.getElementsByName('formulario')[0]

const isDigit = /^[0-9]*$/

const isEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-]+\.[a-zA.]+$/

var validarNombre = function (e) {
    if (formulario.nombre.value.length == 0) {
        alert("Ingrese su nombre")
        e.preventDefault()
    }
}

var validarEmail = function (e) {
    if (formulario.email.value.length == 0) {
        alert("Ingrese su email")
        e.preventDefault()
    } else if (!isEmail.test(formulario.email.value)){
        alert("El email ingresado no es válido. Ingrese un email válido.")
        e.preventDefault()
    }
}

var validarTelefono = function (e) {
    let phone = formulario.telefono.value
    let code = formulario.codigodearea.value
    if ( code.length == 0 || phone.length == 0) {
        alert("Ingrese su número de teléfono")
        e.preventDefault()
    } else if (!isDigit.test(phone) || !isDigit.test(code) ||  phone.length < 8) {
        alert("El número de teléfono ingresado no es válido. Ingrese un número válido.")
        e.preventDefault()
    }
}

var validarMotivoConsulta = function (e) {
    if (formulario.motivo.selectedIndex == 0) {
        alert("Seleccione el motivo de su consulta")
        e.preventDefault()
    }
}

var validarConsulta = function (e) {
    if (document.getElementById("consulta").value == "") {
        alert("Complete el detalle de su consulta");
        e.preventDefault()
    }
}

var validar = function (e) {
    validarNombre(e)
    validarEmail(e)
    validarTelefono(e)
    validarMotivoConsulta(e)
    validarConsulta(e)
}


formulario.addEventListener("submit", validar)