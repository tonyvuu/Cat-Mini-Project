// Here I, US, am looking to add the custom cursor 

// const soundEffect = document.getElementById('soundEffect');
const cursor = document.querySelector("cursor");
const carouselIndicators = document.getElementById('carousel-indicators')

const GenCatFacts = () => {
    soundEffect.play();
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(result => result.fact)
        .then(fact => {
            console.log(fact)

            const factElement = document.getElementById("fact");
            factElement.innerText = fact;

            const factLength = fact.length;
            let timeoutDuration;

            // This sets the fact to disappear after 7 seconds if it is less than 150 characters. Otherwise it will disappear after 16 seconds.
            if (factLength < 150) {
                timeoutDuration = 8000; 
            } else {
                timeoutDuration = 16000; 
            }

            setTimeout(() => {
                factElement.innerText = '';
            }, timeoutDuration);
    });

// Added a hoverable sound effect to our blue eyed mascot to beg for adoption" - US 
function navbarSnd(){
    const hoverMouseOver = () => {
        soundEffect1.play ();
    }
}

function GenCatBreed() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            return response.json()
        })
        .then(catBreed => {

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
                    if (catBreed[i].hypoallergenic < 1) {
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

function GenCar() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            return response.json();
        })
        .then(catBreed => {
            let carInner = document.getElementsByClassName('carousel-inner')[0];
            carInner.innerHTML = ''; // Clear the carousel inner content

            // This for loop cycles through the API and creates a carousel item that includes an image, title, and caption to the carousel.
            for (let j = 0; j < catBreed.length; j++) {
                let id = catBreed[j].id;
                // <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>


                let carBtn = document.createElement('button');
                carBtn.setAttribute('type', 'button');
                carBtn.setAttribute('class', 'd-none')
                carBtn.setAttribute('type', 'button');
                carBtn.setAttribute('data-bs-target', '#carouselExampleCaptions');
                carBtn.setAttribute('data-bs-slide-to', `${j + 3}`);
                carBtn.setAttribute('aria-label', `Slide ${j + 4}`);


                let carItem = document.createElement('div');
                carItem.classList.add('carousel-item');
                if (j === 0) {
                    carItem.classList.add('active');
                }

                let carImg = document.createElement('img');
                carImg.classList.add('d-block', 'w-50')
                carImg.src = `./Assets/Cat-Pictures/${id}.jpeg`;

                let carCap = document.createElement('div');
                carCap.classList.add('carousel-caption', 'd-none', 'd-md-block');

                let carBreed = document.createElement('h5');
                carBreed.innerText = catBreed[j].name;
                carBreed.setAttribute('id', 'picName')
                let carDesc = document.createElement('p');
                carDesc.innerText = catBreed[j].description;
                carDesc.setAttribute('id', 'picDesc');
                carCap.appendChild(carBreed);
                carCap.appendChild(carDesc);

                carItem.appendChild(carImg);
                carItem.appendChild(carCap);

                carInner.appendChild(carItem);
                carouselIndicators.appendChild(carBtn)
            }
        });
}




// Here we are calling our functions so that they run on page load.
GenCatBreed()
GenCar()
    


