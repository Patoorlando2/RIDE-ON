import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validación de frontend
    if (!email.includes("@")) {
      setMensaje("Ingresá un correo válido.");
      return;
    }

    const API_NEWS = 'http://localhost:8000/api/insertarNewsletter';

    // 2. Llamada a la API con fetch
    fetch(API_NEWS, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // Enviamos el email como un objeto JSON
        body: JSON.stringify({ email: email }) 
    })
    .then(response => {
        return response.json().then(data => {
            if (!response.ok) {
                throw new Error(data.message || 'Error al procesar la solicitud.');
            }
            return data;
        });
    })
    .then(data => {
        setMensaje(data.message || "¡Te suscribiste correctamente!");
        setEmail(""); // Limpiar el campo
    })
    .catch(error => {
        console.error('Error en la suscripción:', error);
        if (error.errors && error.errors.email) {
            setMensaje(error.errors.email[0]);
        } else {
            setMensaje(error.message || "Ocurrió un error inesperado. Inténtalo de nuevo.");
        }
    });
}

    return (
        <section className="py-5 bg-light">
        <div className="container text-center">

            <h2 className="fw-bold mb-3">📬 Suscribite a nuestro Newsletter</h2>

            <p className="text-muted mb-4">
            Recibí ofertas exclusivas, novedades y motos destacadas cada semana.
            </p>

            <form className="row justify-content-center" onSubmit={handleSubmit}>
            <div className="col-md-4 col-sm-8 mb-2">
                <input
                type="email"
                className="form-control"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="col-md-2 col-sm-4 mb-2">
                <button className="btn btn-dark w-100" type="submit">
                Suscribirme
                </button>
            </div>
            </form>

            {mensaje && <p className="mt-3">{mensaje}</p>}
        </div>
        </section>
    );
}


export default Newsletter;