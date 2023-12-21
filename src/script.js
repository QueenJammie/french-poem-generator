function submitPoem(response) {
    new Typewriter("#wait", {
        strings: "Bonjour, j'ai entendu la fée du soleil couchant me demander de vous composer un poème, rien que pour vous!",
        autoStart: true,
        delay: 25,
    });

    setTimeout(() => {
        new Typewriter("#patientez", {
            strings: "Veuillez patientez un instant...",
            autoStart: true,
            delay: 110,
        });
    }, 4000);
}

function handleClick(event) {
    event.preventDefault();

    let apiKey = "00261b686eo1ff734tce27d5a5f63915";
    let context = "You are a prestigious poem writer";
    let prompt = "Hello, miss! I'd like you to write a love poem for me and lover boy. Please!";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(submitPoem);
}

let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", handleClick);
