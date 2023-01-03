const FORM = document.getElementById("rating-form");
const SUBMIT = document.getElementById("submit");

SUBMIT.addEventListener("click", (e) => {
  const RATING_OPTIONS = document.getElementsByName("rating");
  let userRating;

  e.preventDefault();

  for (i = 0; i < RATING_OPTIONS.length; i++) {
    if (RATING_OPTIONS[i].checked) userRating = RATING_OPTIONS[i].value;
  }

  console.log(userRating);
});
