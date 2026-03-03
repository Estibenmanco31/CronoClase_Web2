// Carlos
import React from 'react'
import '../styles/StyleLogIn.css'
import clockPng from '../assets/clock.png'

export default function LogIn({ onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (onLogin) onLogin()
    }

    return (
        <div className="main_log_in">
            <div className="container_title_crono">
                <h1 className="featurette-heading fw-normal lh-1 titleCrono">
                    Cron
                    <span>
                        <img className="userCrono" src={clockPng} alt="clock" />
                    </span>
                    Clase
                </h1>
            </div>

            <div className="container_log_in">
                {/* login form */}
                <form id="formLogin" className="cardSinIng" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal log_in_title">Inicio de sesion</h1>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            required
                        />
                        <label htmlFor="floatingInput">Email</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            required
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="remember-me"
                            id="checkDefault"
                        />
                        <label className="form-check-label" htmlFor="checkDefault">
                            Guardar datos
                        </label>
                    </div>

                    <div className="d-flex gap-2">
                        <button className="btn btn-primary w-100 py-2 buttCrono" type="submit">
                            Entrar
                        </button>
                        <button
                            className="btn btn-outline-primary w-100 py-2 buttCrono"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalRegistro"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>

                {/* registration modal */}
                <div
                    className="modal fade"
                    id="modalRegistro"
                    tabIndex={-1}
                    aria-labelledby="modalRegistroLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalRegistroLabel">
                                    Registro de usuario
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <form id="formRegistro">
                                    <div className="mb-3">
                                        <label htmlFor="nombreCompleto" className="form-label">
                                            Nombre completo
                                        </label>
                                        <input type="text" className="form-control" id="nombreCompleto" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cedula" className="form-label">
                                            Cédula
                                        </label>
                                        <input type="text" className="form-control" id="cedula" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">
                                            Teléfono
                                        </label>
                                        <input type="tel" className="form-control" id="telefono" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="fechaNacimiento" className="form-label">
                                            Fecha de nacimiento
                                        </label>
                                        <input type="date" className="form-control" id="fechaNacimiento" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="genero" className="form-label">
                                            Género
                                        </label>
                                        <select className="form-select" id="genero" required>
                                            <option value="">Selecciona una opción</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="femenino">Femenino</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Rol</label>
                                        <select className="form-select" id="rol" required>
                                            <option value="">Selecciona una opción</option>
                                            <option value="docente">Docente</option>
                                            <option value="estudiante">Estudiante</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="emailRegistro" className="form-label">
                                            Correo electrónico
                                        </label>
                                        <input type="email" className="form-control" id="emailRegistro" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="passwordRegistro" className="form-label">
                                            Contraseña
                                        </label>
                                        <input type="password" className="form-control" id="passwordRegistro" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmarPassword" className="form-label">
                                            Confirmar contraseña
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmarPassword"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 py-2 buttCrono">
                                        Registrarse
                                    </button>
                                    <div
                                        id="mensajeRegistro"
                                        className="mt-3 text-success"
                                        style={{ display: 'none' }}
                                    >
                                        Te has registrado exitosamente
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
