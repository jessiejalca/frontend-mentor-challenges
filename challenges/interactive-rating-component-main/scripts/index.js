const COMPONENT = document.getElementById("rating-component");
const FORM = document.getElementById("rating-form");
const SUBMIT = document.getElementById("submit");

SUBMIT.addEventListener("click", (e) => {
  e.preventDefault();
  postResult(fetchRating());
});

const fetchRating = () => {
  const RATING_OPTIONS = document.getElementsByName("rating");
  let userRating;

  for (i = 0; i < RATING_OPTIONS.length; i++) {
    if (RATING_OPTIONS[i].checked) {
      userRating = RATING_OPTIONS[i].value;
      return userRating;
    }
  }
};

const postResult = (userRating) => {
  const IMG = COMPONENT.querySelector("img");
  const TITLE = COMPONENT.querySelector("h1");
  const SUB = COMPONENT.querySelector("p");
  const RESULT = document.createElement("p");

  IMG.setAttribute("src", "./images/illustration-thank-you.svg");
  IMG.setAttribute("alt", "abstract device illustration");
  TITLE.textContent = `Thank you!`;
  TITLE.before(RESULT);
  SUB.textContent = `We appreciate you taking the time to give a rating.
  If you ever need more support, don't hesitate to get in touch!`;
  RESULT.className = "result";
  RESULT.textContent = `You selected ${userRating} out of 5`;
  FORM.remove();
};
