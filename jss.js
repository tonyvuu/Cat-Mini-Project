// Here I, US, am looking to add the custom cursor 

// const soundEffect = document.getElementById('soundEffect');
const cursor = document.querySelector("cursor");

const GenCatFacts = () => {
    soundEffect.play();
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


                    //Will add an image of the seleted breed and gives the image the class 'breedImg'.
                    
                    let id = catBreed[i].id;
                    let imageTag = document.createElement('img');
                    imageTag.classList.add('breedImg')
                    imageTag.src = `./Assets/Cat-Pictures/${id}.jpeg`;
                    infoBox.appendChild(imageTag);
                    

                    //Creates a list for the below list items to be stored.
                    let breedInfo = document.createElement('ul');
                    breedInfo.classList.add("catInfoText")
                    infoBox.appendChild(imageTag);
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

                    let size = catBreed[i].weight.imperial;
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

                    let vocalisation = catBreed[i].vocalisation;
                    let vocalTag = document.createElement('li');
                    vocalTag.innerText = `Vocalisation: ${vocalisation}`;
                    breedInfo.appendChild(vocalTag);

                    let shedding = catBreed[i].shedding_level;
                    let shedTag = document.createElement('li');
                    shedTag.innerText = `Shedding: ${shedding}`;
                    breedInfo.appendChild(shedTag);
                    
                    let health = catBreed[i].health_issues;
                    let healthTag = document.createElement('li');
                    healthTag.innerText = `Health: ${health}`;
                    breedInfo.appendChild(healthTag);
                    
                    //If statement converts the value of Hypoallergenic from binary to yes or no.
                    if (catBreed[i].hypoallergenic < 1){
                        let allergy = 'No';
                        let allergyTag = document.createElement('li');
                        allergyTag.innerText = `Hypoallergenic: ${allergy}`;
                        breedInfo.appendChild(allergyTag);
                        } else {
                        let allergy = 'Yes';
                        let allergyTag = document.createElement('li');
                        allergyTag.innerText = `Hypoallergenic: ${allergy}`;
                        breedInfo.appendChild(allergyTag);
                        }
                })
            }
        })
}


GenCatBreed()

    // name, description, temperment, energy_level, social_needs, health_issues, vocalization, 
    // function genCatBreedInfo(breedName)


