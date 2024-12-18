window.onload = function () {
  const FORM_LIST = document.getElementById("form-list");

  let savedForms = JSON.parse(localStorage.getItem("form_data")) || [];

  if (savedForms.length === 0) {
    FORM_LIST.innerHTML = "<p>No saved forms. Please add a form.</p>";
    return;
  }

  savedForms.forEach((form, index) => {
    const FORM_ITEM = document.createElement("div");
    FORM_ITEM.classList.add("form-item");

    FORM_ITEM.innerHTML = `
          <h3>Form ${index + 1}</h3>
          <div class="form-details">
              <label>Name: </label> <span>${form.name}</span>
          </div>
          <div class="form-details">
              <label>Address: </label> <span>${form.address}</span>
          </div>
          <div class="form-details">
              <label>Age: </label> <span>${form.age}</span>
          </div>
          <div class="form-details">
              <label>Chapter: </label> <span>${form.chapter}</span>
          </div>
          <div class="form-details">
              <label>Country: </label> <span>${form.country}</span>
          </div>
          <div class="form-details">
              <label>Comment: </label> <span>${form.comment}</span>
          </div>
          <button class="edit" onclick="EDIT_FORM(${index})">Edit</button>
          <button class="delete" onclick="DELETE_FORM(${index})">Delete</button>
      `;

    FORM_LIST.appendChild(FORM_ITEM);
  });
};

function EDIT_FORM(index) {
  window.location.href = `edit.html?index=${index}`;
}

function DELETE_FORM(index) {
  let savedForms = JSON.parse(localStorage.getItem("form_data")) || [];
  savedForms.splice(index, 1);
  localStorage.setItem("form_data", JSON.stringify(savedForms));
  window.location.reload();
}
