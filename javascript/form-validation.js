document.getElementById("user-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const age = document.getElementById("age").value;
  const chapter = document.getElementById("chapter").value;
  const country = document.getElementById("country").value;
  const comment = document.getElementById("comment").value;

  let isValid = true;

  document.querySelectorAll(".error-message").forEach(message => {
    message.style.display = "none";
  });
  document.querySelectorAll("input, select, textarea").forEach(input => {
    input.style.borderColor = "#ccc";
  });

  if (!name) {
    DISPLAY_ERROR("name", "Name is required.");
    isValid = false;
  }
  if (!address) {
    DISPLAY_ERROR("address", "Address is required.");
    isValid = false;
  }
  if (!age || age < 1 || age > 120) {
    DISPLAY_ERROR("age", "Please enter a valid age (1-120).");
    isValid = false;
  }
  if (!chapter) {
    DISPLAY_ERROR("chapter", "Chapter is required.");
    isValid = false;
  }
  if (!country) {
    DISPLAY_ERROR("country", "Country is required.");
    isValid = false;
  }
  if (!comment) {
    DISPLAY_ERROR("comment", "Comment is required.");
    isValid = false;
  }

  if (isValid) {
    let data = JSON.parse(localStorage.getItem("form_data")) || [];
    data.push({
      name: name,
      address: address,
      age: age,
      chapter: chapter,
      country: country,
      comment: comment
    });
    localStorage.setItem("form_data", JSON.stringify(data));

    SHOW_MODAL();

    setTimeout(function () {
      window.location.href = "view.html";
    }, 1500);
  }
});

function DISPLAY_ERROR(fieldId, message) {
  const errorMessage = document.getElementById(`${fieldId}-error`);
  const field = document.getElementById(fieldId);
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  field.style.borderColor = "red";
}

function SHOW_MODAL() {
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
