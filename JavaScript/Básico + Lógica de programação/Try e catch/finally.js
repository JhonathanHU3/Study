// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo');
//     if('Jair bolsonaro'.length !== 7) {
//         throw new Error("Erro ao manipular arquivo!")
//     }
//     console.log('Fechando o arquivo');
// } catch (error) {
//     console.log(error)
//     console.log('Tratando erro')
// } finally {
//     console.log('Fechando arquivo..');
// }

function returnHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Esperando instância do tipo Date()");
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const date = new Date("07-30-2006 08:48:12");
  console.log(returnHour(date));
} catch (error) {
  console.log(error)
} finally {
  console.log('Tenha um bom dia!')
}
