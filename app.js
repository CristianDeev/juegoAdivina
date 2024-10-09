function jugar() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let tried;
    let trieds = 0;

    while (true) {
        tried = parseInt(prompt("Adivina el numero entre 1 y 100:"));
        trieds++;

        if (tried === secretNumber) {
            alert("Felicidades, Adivinaste el numero en " + trieds + " Intentos.");
            break;
        } else if (tried < secretNumber) {
            alert("El numero es mayor:");
        } else if (tried > secretNumber) {
            alert("El numero es menor");
        }
    }
}
