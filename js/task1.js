const btnGetInfo = document.querySelector(".btn__get");

btnGetInfo.addEventListener("click", () => {
  const cards = [...document.querySelectorAll(".card")];

  const userInfo = cards.map((item) => {
    const name = item.querySelector(".name").textContent;
    const phone = item.querySelector(".tel").textContent;
    const email = item.querySelector(".email").textContent;

    return { name, phone, email };
  });

  console.log(userInfo);
});
