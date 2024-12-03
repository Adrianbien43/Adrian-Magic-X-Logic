window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const index = urlParams.get("index");

  if (index !== null) {
    const savedForms = JSON.parse(localStorage.getItem("form_data")) || [];
    const formData = savedForms[index];

    document.getElementById("name").value = formData.name;
    document.getElementById("address").value = formData.address;
    document.getElementById("age").value = formData.age;
    document.getElementById("chapter").value = formData.chapter;
    document.getElementById("country").value = formData.country;
    document.getElementById("comment").value = formData.comment;

    document.getElementById("edit-form").onsubmit = function (event) {
      event.preventDefault();

      const updatedForm = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        age: document.getElementById("age").value,
        chapter: document.getElementById("chapter").value,
        country: document.getElementById("country").value,
        comment: document.getElementById("comment").value,
      };

      UPDATE_FORM_DATA(updatedForm, index, savedForms);

      window.location.href = "view.html";
    };
  } else {
    window.location.href = "view.html";
  }
};

function UPDATE_FORM_DATA(updatedForm, index, savedForms) {
  savedForms[index] = updatedForm;
  localStorage.setItem("form_data", JSON.stringify(savedForms));
}
