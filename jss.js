const GenCatFacts = () => {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(result => result.fact)
        .then(fact => document.getElementById("fact").innerText = fact
        );
}

function GenCatBreed(){
    fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            return response.json()
        })
        .then(catBreed => {
            console.log(catBreed)
            for(let i = 0; i < 20; i++){
                console.log(catBreed[i].name)
                let breed = document.createElement('button');
                let breedList = document.getElementById('breedListBox');
                
                breed.classList.add('breedBtn');
                breed.innerText = catBreed[i].name;
                
                breedList.appendChild(breed);
            }        
            
        })
}

GenCatBreed()

// name, description, temperment, energy_level, social_needs, health_issues, vocalization, 
// function genCatBreedInfo(breedName)


