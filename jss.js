function getCatFact(){
    fetch('https://cat-fact.herokuapp.com/facts/random')
  .then(response => response.json())
  .then(data => console.log(data.text))
  .catch(error => console.error(error));
}

getCatFact()