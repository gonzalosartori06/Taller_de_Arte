document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto")

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nombre = document.getElementById("nombre").value.trim()
    const telefono = document.getElementById("telefono").value.trim()
    const motivo = document.getElementById("motivo").value
    const mensaje = document.getElementById("mensaje").value.trim()

    if (nombre === "") {
      alert("Por favor, completá tu nombre y apellido.")
      return
    }

    if (telefono === "") {
      alert("Por favor, ingresá un número de teléfono.")
      return
    }

    if (isNaN(telefono)) {
      alert("El teléfono debe contener solo números.")
      return
    }

    if (motivo === "") {
      alert("Seleccioná el motivo de la consulta.")
      return
    }

    if (mensaje === "") {
      alert("Por favor, escribí tu consulta.")
      return
    }

    alert("¡Consulta enviada correctamente!")
    formulario.reset()
  })
})
