window.onload = function () {
  const FORM_LIST = document.getElementById("form-list");

  let SAVED_FORMS = JSON.parse(localStorage.getItem("form_data")) || [];

  if (SAVED_FORMS.length === 0) {
    FORM_LIST.innerHTML = "<p>No saved forms. Please add a form.</p>";
    return;
  }

  SAVED_FORMS.forEach((FORM, INDEX) => {
    const FORM_ITEM = document.createElement("div");
    FORM_ITEM.classList.add("form-item");

    FORM_ITEM.innerHTML = `
          <h3>Form ${INDEX + 1}</h3>
          <div class="form-details">
              <label>Name: </label> <span>${FORM.name}</span>
          </div>
          <div class="form-details">
              <label>Address: </label> <span>${FORM.address}</span>
          </div>
          <div class="form-details">
              <label>Age: </label> <span>${FORM.age}</span>
          </div>
          <div class="form-details">
              <label>Chapter: </label> <span>${FORM.chapter}</span>
          </div>
          <div class="form-details">
              <label>Country: </label> <span>${FORM.country}</span>
          </div>
          <div class="form-details">
              <label>Comment: </label> <span>${FORM.comment}</span>
          </div>
          <button class="edit" onclick="editForm(${INDEX})">Edit</button>
          <button class="delete" onclick="deleteForm(${INDEX})">Delete</button>
      `;

    FORM_LIST.appendChild(FORM_ITEM);
  });
};

function editForm(INDEX) {
  window.location.href = `edit.html?index=${INDEX}`;
}

function deleteForm(INDEX) {
  let SAVED_FORMS = JSON.parse(localStorage.getItem("form_data")) || [];
  SAVED_FORMS.splice(INDEX, 1);
  localStorage.setItem("form_data", JSON.stringify(SAVED_FORMS));
  window.location.reload();
}
