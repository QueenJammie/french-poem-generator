function submitPoem(response) {
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
    let prompt = `Please, generate a french poem about ${sujetInput.value} in basic HTML!`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(submitPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", handleSubmit);
