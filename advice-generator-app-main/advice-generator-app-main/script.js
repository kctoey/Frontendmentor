const adviceText = document.querySelector(".containertext");
const btn = document.querySelector("button");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector(".title").innerHTML = `Advice #${data.slip.id}`;
  document.querySelector(".containertext").innerHTML = `"${data.slip.advice}"`;
};
fetchAdvice();
btn.addEventListener("click", fetchAdvice);
