function getCatFacts() {
  fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => {
      response.json().then(data => {
        let html = "";
        const { all } = data;
        const rand = Math.floor(Math.random() * 230);

        html += `<p>${all[rand].text}</p>`;
        document.getElementById("display").innerHTML = html;
      });
      fetch("https://api.thecatapi.com/v1/images/search").then(response => {
        response.json().then(data => {
          const { url: imgURL } = data[0];
          document.querySelector("img").setAttribute("src", imgURL);
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
}

document.getElementById("button").addEventListener("click", getCatFacts());
