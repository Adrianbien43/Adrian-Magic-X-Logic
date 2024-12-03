document.getElementById("user-form").addEventListener("submit", function (EVENT) {
  EVENT.preventDefault();

  const NAME = document.getElementById("name").value;
  const ADDRESS = document.getElementById("address").value;
  const AGE = document.getElementById("age").value;
  const CHAPTER = document.getElementById("chapter").value;
  const COUNTRY = document.getElementById("country").value;
  const COMMENT = document.getElementById("comment").value;

  let IS_VALID = true;

  document.querySelectorAll(".error-message").forEach(MESSAGE => {
    MESSAGE.style.display = "none";
  });
  document.querySelectorAll("input, select, textarea").forEach(INPUT => {
    INPUT.style.borderColor = "#ccc";
  });

  if (!NAME) {
    DISPLAY_ERROR("name", "Name is required.");
    IS_VALID = false;
  }
  if (!ADDRESS) {
    DISPLAY_ERROR("address", "Address is required.");
    IS_VALID = false;
  }
  if (!AGE || AGE < 1 || AGE > 120) {
    DISPLAY_ERROR("age", "Please enter a valid age (1-120).");
    IS_VALID = false;
  }
  if (!CHAPTER) {
    DISPLAY_ERROR("chapter", "Chapter is required.");
    IS_VALID = false;
  }
  if (!COUNTRY) {
    DISPLAY_ERROR("country", "Country is required.");
    IS_VALID = false;
  }
  if (!COMMENT) {
    DISPLAY_ERROR("comment", "Comment is required.");
    IS_VALID = false;
  }

  if (IS_VALID) {
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

    SHOW_MODAL();

    setTimeout(function () {
      window.location.href = "view.html";
    }, 1500);
  }
});

function DISPLAY_ERROR(FIELD_ID, MESSAGE) {
  const ERROR_MESSAGE = document.getElementById(`${FIELD_ID}-error`);
  const FIELD = document.getElementById(FIELD_ID);
  ERROR_MESSAGE.textContent = MESSAGE;
  ERROR_MESSAGE.style.display = "block";
  FIELD.style.borderColor = "red";
}

function SHOW_MODAL() {
  const MODAL = document.getElementById("modal");
  MODAL.style.display = "block";

  const CLOSE_BTN = MODAL.getElementsByClassName("close")[0];
  CLOSE_BTN.onclick = function () {
    MODAL.style.display = "none";
  };

  window.onclick = function (EVENT) {
    if (EVENT.target == MODAL) {
      MODAL.style.display = "none";
    }
  };
}
