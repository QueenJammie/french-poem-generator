/*function submitPoem(response) {
    new Typewriter("#wait", {
        strings: "Bonjour, j'ai entendu la fée du soleil couchant me demander de vous composer un poème, rien que pour vous!",
        autoStart: true,
        cursor: "",
        delay: 15,
    });

    setTimeout(() => {
        new Typewriter("#patientez", {
            strings: "Veuillez patientez un instant...",
            autoStart: true,
            cursor: "",
            delay: 30,
        });
    }, 2000);

    setTimeout(() => {
        new Typewriter("#poem-field", {
            strings: response.data.answer,
            autoStart: true,
            delay: 30,
        })
    }, 4000);
}

function handleSubmit(event) {
    event.preventDefault();

    let sujetInput = document.querySelector("#sujetInput");

    let apiKey = "00261b686eo1ff734tce27d5a5f63915";
    let context = "You are a prestigious poem writer. Do not use gender in your sentences and follow the user instructions.";
    let prompt = `Please, generate a french poem about ${sujetInput.value} in basic HTML. Separate each line by a <br />. Sign the poem by \'IA\' in this format: <i style="color: #B59D2D;">IA</i>`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(submitPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", handleSubmit);
*/
function displayPoem(response) {
    new Typewriter("#poem-field", {
        strings: response.data.answer,
        autoStart: true,
        delay: 30,
        cursor: "",
    });
}

function submitPoem() {
    let instructionInput = document.querySelector("#topic");

    let apiKey = "00261b686eo1ff734tce27d5a5f63915";
    let prompt = `Write a french poem about ${instructionInput.value} and sign it with 'SheCodes IA' in a <strong> and centered element at the very end of the poem and NOT at the beggining. Please, give your answer in HTML format, each line separated by a <br />, centered and without any background.`;
    let context = "You are a prestigious writer who like to write poem and to help other.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);
}

function handleSubmit(event) {
    event.preventDefault();

    new Typewriter("#wait-field", {
        strings: "Un instant, patientez...",
        autoStart: true,
        delay: 110,
        cursor: "",
    });
    submitPoem();
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", handleSubmit);
