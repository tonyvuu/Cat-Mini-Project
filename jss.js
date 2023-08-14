const GenCatFacts = () => {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(result => result.fact)
        .then(fact => document.getElementById("fact").innerText = fact
        );
}

function GenCatBreed() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            return response.json()
        })
        .then(catBreed => {
            console.log(catBreed)

            //For loop to cycle throught the data from our fetch request. For our purposes we are only looping therough the first 20 indeces for the time being.
            for (let i = 0; i < catBreed.length; i++) {
                // console.log(catBreed[i].name)
                
                //Creates a button after each loop and sets the inner text of the button to the breed at each index position.
                let breed = document.createElement('button');
                breed.classList.add('breedBtn');
                breed.innerText = catBreed[i].name;
                
                let breedList = document.getElementById('breedListBox');
                breedList.appendChild(breed);

                //Event listener will append the following into the breedInfoBox div when a breed is clicked.
                breed.addEventListener('click', () => {
                    let infoBox = document.getElementById('breedInfoBox');

                    //Makes it so that when you click a button it clears the previous information instead of adding onto it.
                    while (infoBox.firstChild) {
                        infoBox.removeChild(infoBox.firstChild);
                    }

                    //Adds a header to the infoBox with the name of the selected breed.
                    let name = catBreed[i].name;
                    let nameTag = document.createElement('h2');
                    nameTag.innerText = name;
                    infoBox.appendChild(nameTag);

                    //Will add an image of the seleted breed.
                    let breedImg = document.createElement('img');
                    // breedImg.innerHTML = src = `${catBreed[i].}`;
                    // infoBox.appendChild(breedImg)

                    //Creates a list for the below list items to be stored.
                    let breedInfo = document.createElement('ul');
                    infoBox.appendChild(breedImg);
                    infoBox.appendChild(breedInfo);


                    //Generates a brief description of the breed fetched from the APi.
                    let desc = catBreed[i].description;
                    let descTag = document.createElement('li');
                    descTag.innerText = desc;
                    breedInfo.appendChild(descTag);

                    //Generates each block below as a list item within the infoBox providing more information on the selected breed.
                    let temp = catBreed[i].temperament;
                    let tempTag = document.createElement('li');
                    tempTag.innerText = `Temperament: ${temp}`;
                    breedInfo.appendChild(tempTag);

                    let lifespan = catBreed[i].life_span;
                    let lifeTag = document.createElement('li');
                    lifeTag.innerText = `Lifespan: ${lifespan} years`;
                    breedInfo.appendChild(lifeTag);

                    let size = catBreed[i].weight.metric;
                    let sizeTag = document.createElement('li');
                    sizeTag.innerText = `Weight: ${size}lbs`;
                    breedInfo.appendChild(sizeTag);

                    let friendTag = document.createElement('li');
                    friendTag.innerText = `Friendliness: Children: ${catBreed[i].child_friendly}; Dogs: ${catBreed[i].dog_friendly}; Strangers: ${catBreed[i].stranger_friendly}`; 
                    breedInfo.appendChild(friendTag)

                    let socialness = catBreed[i].social_needs;
                    let socialTag = document.createElement('li');
                    socialTag.innerText = `Socialness: ${socialness}`;
                    breedInfo.appendChild(socialTag);

                    let allergy = catBreed[i].hypoallergenic;
                    let allergyTag = document.createElement('li');
                    allergyTag.innerText = `Hypoallergenic: ${allergy}`;
                    breedInfo.appendChild(allergyTag);
                })
            }
        })
}


GenCatBreed()

    // name, description, temperment, energy_level, social_needs, health_issues, vocalization, 
    // function genCatBreedInfo(breedName)


