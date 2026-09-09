const prompt = require("prompt-sync")();

let name = prompt("What's your name? ");

console.log("Hello " + name);




        console.log(`#${t.id} ${t.departure} → ${t.destination}`);
        console.log(`  Départ : ${t.departureTime}`);
        console.log(`  Arrivée : ${t.arrivalTime}`);
        console.log(`  Prix : ${t.price} DH`);
        console.log(`  Places disponibles : ${t.availableSeats}\n`);
        