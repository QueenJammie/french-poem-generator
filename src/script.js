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
            strings: "The snow falls gently on the ground<br />A blanket of white, without a sound.",
            autoStart: true,
            delay: 30,
        })
    }, 4000);
}

function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "00261b686eo1ff734tce27d5a5f63915";
    let context = "You are a prestigious poem writer";
    let prompt = "Hello, miss! I'd like you to write a love poem for me and lover boy. Please!";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(submitPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", handleSubmit);
