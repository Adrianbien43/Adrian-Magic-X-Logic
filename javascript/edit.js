window.onload = function () {
  const URL_PARAMS = new URLSearchParams(window.location.search);
  const INDEX = URL_PARAMS.get("index");

  if (INDEX !== null) {
    const SAVED_FORMS = JSON.parse(localStorage.getItem("form_data")) || [];
    const FORM_DATA = SAVED_FORMS[INDEX];

    document.getElementById("name").value = FORM_DATA.name;
    document.getElementById("address").value = FORM_DATA.address;
    document.getElementById("age").value = FORM_DATA.age;
    document.getElementById("chapter").value = FORM_DATA.chapter;
    document.getElementById("country").value = FORM_DATA.country;
    document.getElementById("comment").value = FORM_DATA.comment;

    document.getElementById("edit-form").onsubmit = function (EVENT) {
      EVENT.preventDefault();

      const UPDATED_FORM = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        age: document.getElementById("age").value,
        chapter: document.getElementById("chapter").value,
        country: document.getElementById("country").value,
        comment: document.getElementById("comment").value,
      };

      SAVED_FORMS[INDEX] = UPDATED_FORM;
      localStorage.setItem("form_data", JSON.stringify(SAVED_FORMS));

      window.location.href = "view.html";
    };
  } else {
    window.location.href = "view.html";
  }
};
