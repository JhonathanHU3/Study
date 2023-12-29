// Entre 0 - 11: Bom dia!
// Entre 12 - 17: Boa tarde!
// Entre 18 - 23: Boa noite!

const hora = 16;

// if (hora < 12){
//     console.log('Bom dia');
// } else if (hora < 18) {
//     console.log("Boa tarde!");
// } else {
//     console.log('Boa noite!');
// };

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Insira uma hora valida!')
}