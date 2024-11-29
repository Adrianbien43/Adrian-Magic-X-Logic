document.getElementById("user-form").addEventListener("submit", function (EVENT) {
  EVENT.preventDefault();

  const NAME = document.getElementById("name").value;
  const ADDRESS = document.getElementById("address").value;
  const AGE = document.getElementById("age").value;
  const CHAPTER = document.getElementById("chapter").value;
  const COUNTRY = document.getElementById("country").value;
  const COMMENT = document.getElementById("comment").value;

  let VALID = true;

  document.querySelectorAll(".error-message").forEach(MESSAGE => {
    MESSAGE.style.display = "none";
  });
  document.querySelectorAll("input, select, textarea").forEach(INPUT => {
    INPUT.style.borderColor = "#ccc";
  });

  if (!NAME) {
    DISPLAY_ERROR("name", "Name is required.");
    VALID = false;
  }
  if (!ADDRESS) {
    DISPLAY_ERROR("address", "Address is required.");
    VALID = false;
  }
  if (!AGE || AGE < 1 || AGE > 120) {
    DISPLAY_ERROR("age", "Please enter a valid age (1-120).");
    VALID = false;
  }
  if (!CHAPTER) {
    DISPLAY_ERROR("chapter", "Chapter is required.");
    VALID = false;
  }
  if (!COUNTRY) {
    DISPLAY_ERROR("country", "Country is required.");
    VALID = false;
  }
  if (!COMMENT) {
    DISPLAY_ERROR("comment", "Comment is required.");
    VALID = false;
  }

  if (VALID) {
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

    alert("Form submitted successfully!");
    window.location.href = "view.html";
  }
});

function DISPLAY_ERROR(FIELD_ID, MESSAGE) {
  const ERROR_MESSAGE = document.getElementById(`${FIELD_ID}-error`);
  const FIELD = document.getElementById(FIELD_ID);
  ERROR_MESSAGE.textContent = MESSAGE;
  ERROR_MESSAGE.style.display = "block";
  FIELD.style.borderColor = "red";
}
