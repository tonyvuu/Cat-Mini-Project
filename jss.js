const GenCatFacts = ()=> {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(result=> result.fact)
    .then(fact => document.getElementById("fact").innerText = fact
    );
}