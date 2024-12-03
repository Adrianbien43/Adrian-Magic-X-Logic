document.getElementById("registro-form").addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("nombre-error").classList.add("d-none");
  document.getElementById("email-error").classList.add("d-none");
  document.getElementById("password-error").classList.add("d-none");

  const nombre = document.getElementById("nombre-input").value.trim();
  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password-input").value.trim();

  let isValid = true;

  if (nombre === "") {
    document.getElementById("nombre-error").classList.remove("d-none");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("email-error").textContent = "El correo electrónico es obligatorio.";
    document.getElementById("email-error").classList.remove("d-none");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Introduce un correo electrónico válido.";
    document.getElementById("email-error").classList.remove("d-none");
    isValid = false;
  }

  // Validar contraseña
  if (password === "") {
    document.getElementById("password-error").textContent = "La contraseña es obligatoria.";
    document.getElementById("password-error").classList.remove("d-none");
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("password-error").textContent = "La contraseña debe tener al menos 6 caracteres.";
    document.getElementById("password-error").classList.remove("d-none");
    isValid = false;
  }

  if (isValid) {
    alert("Formulario enviado correctamente.");
  }
});
