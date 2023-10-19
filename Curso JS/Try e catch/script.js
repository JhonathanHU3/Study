// try{
//     console.log(naoExisto);
// } catch(error) {
//     console.log("A variável naoExisto não existe");
//     console.log(err);
// }

function soma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new ReferenceError("num1 e num2 não são números");
    }

    return num1 + num2;
}

try{
    console.log(soma(4, 8));
    console.log(soma("4", 8));
} catch(error) {
    // console.log(error);
    console.log("Alguma coisa mais amigável para o usuário")
}