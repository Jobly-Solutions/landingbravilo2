// Este script se inyectará en la página para intentar comunicarse con el iframe de Brevo
;(() => {
  // Función para intentar llenar el formulario de Brevo
  function fillBrevoForm() {
    try {
      // Recuperar datos del localStorage
      const savedData = localStorage.getItem("braviloFormData")
      if (!savedData) return

      const formData = JSON.parse(savedData)
      console.log("Intentando llenar formulario con datos:", formData)

      // Intentar acceder al iframe (esto fallará debido a CORS, pero lo intentamos)
      const iframes = document.querySelectorAll("iframe")
      iframes.forEach((iframe) => {
        try {
          // Enviar mensaje al iframe
          iframe.contentWindow.postMessage(
            {
              type: "FILL_FORM",
              data: formData,
            },
            "*",
          )
        } catch (e) {
          console.log("No se pudo acceder al iframe:", e)
        }
      })

      // También escuchar mensajes del iframe
      window.addEventListener("message", (event) => {
        console.log("Mensaje recibido:", event.data)

        // Si el iframe nos dice que está listo, enviamos los datos
        if (event.data && event.data.type === "FORM_READY") {
          event.source.postMessage(
            {
              type: "FILL_FORM",
              data: formData,
            },
            "*",
          )
        }
      })
    } catch (e) {
      console.error("Error al intentar llenar el formulario:", e)
    }
  }

  // Intentar llenar el formulario cada 2 segundos
  setInterval(fillBrevoForm, 2000)

  // También intentar inmediatamente
  fillBrevoForm()

  console.log("Script de Brevo cargado correctamente")
})()
