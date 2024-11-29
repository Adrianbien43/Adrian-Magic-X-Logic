document.getElementById("user-form").addEventListener("submit", function (EVENT) {
  EVENT.preventDefault();

  const NAME = document.getElementById("name").value;
  const ADDRESS = document.getElementById("address").value;
  const AGE = document.getElementById("age").value;
  const CHAPTER = document.getElementById("chapter").value;
  const COUNTRY = document.getElementById("country").value;
  const COMMENT = document.getElementById("comment").value;

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

  window.location.href = "view.html";
});
