document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const submitPlace = (e) => {
    e.preventDefault();

    const inputEl = document.querySelector(".favorite-input");
    const newPlace = inputEl.value;
    inputEl.value = "";

    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = newPlace;

    ul.appendChild(li);
  };

  document.querySelector(".list-container").querySelector("form")
    .addEventListener("submit", submitPlace);

  // adding new photos

  // --- your code here!

  const togglePhotoForm = (e) => {
    const formContainer = document.querySelector(".photo-form-container");
    let classList = formContainer.className;

    if (classList.includes("hidden")) {
      formContainer.className = classList
                                  .slice(0, classList.indexOf(" hidden"));
    } else {
      formContainer.className += " hidden";
    }
  };
  
  document.querySelector("button")
    .addEventListener("click", togglePhotoForm);

});
