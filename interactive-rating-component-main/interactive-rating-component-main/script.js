const rating = document.getElementById("ratingform");
const sendBtn = document.querySelector("#btnsub");
let selectitem = document.querySelectorAll("rating-card__btn").value;
const all = document.querySelector("main");
rating.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating-card__btn")) {
    removeActive();
    e.target.classList.add("active");
    selectitem = e.target.innerHTML;
  } else if (e.target.classList.contains("ratingform")) {
    removeActive();
    e.target.classList.add("active");
    selectitem = e.target.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  all.innerHTML = `
      
      <img class="thk" src="./images/illustration-thank-you.svg" alt="Thank you">
  
      <h3>You selected  ${selectitem} of 5</h3>

      <h2>Thank You!</h2>
      <h4>We appreciate you taking the time to give a rating. If
      you ever need more support, don’t hesitate to get in touch!</h4>
  `;
});
function removeActive() {
  for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove("active");
  }
}
