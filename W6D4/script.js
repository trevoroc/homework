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
  /*
  TODO: Define a function that will be a callback for a submit listener for
  the form. Parse and save the input, clear the text box, and append the new
  item to the list.
  */
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

  /*
  TODO: Add an event listener on the input element and give it the callback
   defined above.
  */
  // debugger;
  document.querySelector(".list-container").querySelector("form")
    .addEventListener("submit", submitPlace);

  // adding new photos

  // --- your code here!



});
