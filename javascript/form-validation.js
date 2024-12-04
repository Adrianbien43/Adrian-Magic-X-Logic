document.getElementById("user-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Ocultar los mensajes de error
  document.querySelectorAll(".error-message").forEach(message => {
    message.style.display = "none";
  });

  document.querySelectorAll("input, select, textarea").forEach(input => {
    input.style.borderColor = "#ccc";
  });

  // Constantes en mayúsculas
  const NAME = document.getElementById("name").value;
  const ADDRESS = document.getElementById("address").value;
  const AGE = document.getElementById("age").value;
  const CHAPTER = document.getElementById("chapter").value;
  const COUNTRY = document.getElementById("country").value;
  const COMMENT = document.getElementById("comment").value;

  let isValid = true; // Variable en camelCase

  if (!NAME) {
    DisplayError("name", "Name is required.");
    isValid = false;
  }
  if (!ADDRESS) {
    DisplayError("address", "Address is required.");
    isValid = false;
  }
  if (!AGE || AGE < 1 || AGE > 120) {
    DisplayError("age", "Please enter a valid age (1-120).");
    isValid = false;
  }
  if (!CHAPTER) {
    DisplayError("chapter", "Chapter is required.");
    isValid = false;
  }
  if (!COUNTRY) {
    DisplayError("country", "Country is required.");
    isValid = false;
  }
  if (!COMMENT) {
    DisplayError("comment", "Comment is required.");
    isValid = false;
  }

  if (isValid) {
    let DATA = JSON.parse(localStorage.getItem("form_data")) || [];
    DATA.push({
      name: NAME,
      address: ADDRESS,
      age: AGE,
      chapter: CHAPTER,
      country: COUNTRY,
      comment: COMMENT
    });
    localStorage.setItem("form_data", JSON.stringify(DATA));

    ShowModal();

    setTimeout(function () {
      window.location.href = "view.html";
    }, 1500);
  }
});

// Funciones en camelCase
function DisplayError(fieldId, message) {
  const errorMessage = document.getElementById(`${fieldId}-error`);
  const field = document.getElementById(fieldId);
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  field.style.borderColor = "red";
}

function ShowModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  const closeBtn = modal.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
