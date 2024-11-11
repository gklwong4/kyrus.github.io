fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".data");

    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("card");
      container.appendChild(div);
      const inner = document.createElement("div");
      inner.classList.add("card-inner");
      div.appendChild(inner);
      const front = document.createElement("div");
      const back = document.createElement("div");
      front.classList.add("card-front");
      back.classList.add("card-back");
      const front_text = document.createElement("div");
      front_text.classList.add("card-front-text");
      front_text.textContent = item.title;
      front.style.backgroundImage = `url(${item.imageURL})`;
      const back_text = document.createElement("p")
      back_text.classList.add("card-back-text")
      back_text.textContent = item.description;
      inner.appendChild(front);
      inner.appendChild(back);
      front.appendChild(front_text);
      back.appendChild(back_text)
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = 1080;
  const opacity = scrollPosition / (bodyHeight - windowHeight);
  document.querySelector(".background").style.opacity = opacity;
  this.document.querySelector(".header").style.opacity = 1 - opacity;
});
