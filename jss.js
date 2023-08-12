const GenCatFacts = ()=> {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(result=> result.fact)
    .then(fact => document.getElementById("fact").innerText = fact
    );
}

const GenCatBreed = ()=> {
  fetch("https://api.thecatapi.com/v1/breeds")
  .then (response => response.json())
  .then (data => {
    console.log(data);
  })
}

GenCatBreed()