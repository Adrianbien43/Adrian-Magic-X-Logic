document.getElementById("user-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const age = document.getElementById("age").value;
  const chapter = document.getElementById("chapter").value;
  const country = document.getElementById("country").value;
  const comment = document.getElementById("comment").value;

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

  window.location.href = "view.html";
});
