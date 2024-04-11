const newAdviceButton = document.querySelector(".dice_button");
const adviceIdElem = document.querySelector(".advice_id");
const adviceElem = document.querySelector(".advice");


const API_ENDPOINT = "https://api.adviceslip.com/advice";

async function fetchAdvice() {
    try {
        const response = await fetch(API_ENDPOINT);
        if (response.ok) {
            let jsonAdvice = await response.json();
            return jsonAdvice.slip;
        }
    }
    catch (error) {
        console.log("There was an error getting advice from the Advice Slip API");
        console.log(error.message);
    }
}

function displayAdvice({id, advice}) {
    adviceIdElem.textContent = `Advice #${id}`;
    adviceElem.textContent = "“" + advice + "”";
}

async function displayNewAdvice() {
    const jsonAdvice = await fetchAdvice();
    displayAdvice(jsonAdvice);
}

newAdviceButton.addEventListener("click", displayNewAdvice);

displayNewAdvice();