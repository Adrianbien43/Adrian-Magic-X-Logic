document.getElementById("registro-form").addEventListener("submit", function (EVENT) {

  EVENT.preventDefault();

  document.getElementById("nombre-error").classList.add("d-none");
  document.getElementById("email-error").classList.add("d-none");
  document.getElementById("password-error").classList.add("d-none");

  const NOMBRE = document.getElementById("nombre-input").value.trim();
  const EMAIL = document.getElementById("email-input").value.trim();
  const PASSWORD = document.getElementById("password-input").value.trim();

  let IS_VALID = true;

  if (NOMBRE === "") {
    document.getElementById("nombre-error").classList.remove("d-none");
    IS_VALID = false;
  }

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (EMAIL === "") {
    document.getElementById("email-error").textContent = "El correo electrónico es obligatorio.";
    document.getElementById("email-error").classList.remove("d-none");
    IS_VALID = false;
  } else if (!EMAIL_REGEX.test(EMAIL)) {
    document.getElementById("email-error").textContent = "Introduce un correo electrónico válido.";
    document.getElementById("email-error").classList.remove("d-none");
    IS_VALID = false;
  }

  // Validar contraseña
  if (PASSWORD === "") {
    document.getElementById("password-error").textContent = "La contraseña es obligatoria.";
    document.getElementById("password-error").classList.remove("d-none");
    IS_VALID = false;
  } else if (PASSWORD.length < 6) {
    document.getElementById("password-error").textContent = "La contraseña debe tener al menos 6 caracteres.";
    document.getElementById("password-error").classList.remove("d-none");
    IS_VALID = false;
  }

  if (IS_VALID) {
    alert("Formulario enviado correctamente.");
  }
});
