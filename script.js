var cardReason = document.querySelector("#card-reason p");
var gotReason = document.getElementById("got-reason");


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function getRandomReason(reasons) {
  gotReason.onclick = () => { cardReason.innerHTML = reasons[getRandomInteger(0, reasons.length)].reason };
}

function main() {

  var reasons = [
    { id: 1, reason: "Amo tu pie de Limon" },
    { id: 2, reason: "Tu sonrisa es grande y bellisima. No me cansaria de verla" },
    { id: 3, reason: "Tus lindas pestañas" },
    { id: 4, reason: "Tus besos" },
    { id: 5, reason: "Estoy perdido en el verde de tus ojos" },
    { id: 6, reason: "Tu personalidad firme" },
    { id: 7, reason: "Aunque tu personalidad es firme, tienes tus lindos berrinches y los amo!" },
    { id: 8, reason: "Lo atenta y detallista que eres" },
    { id: 9, reason: "Lo bueno que eres guiandome y recordandome cuando pierdo el rumbo" },
    { id: 10, reason: "Me gusta cuando te preocupas por mi" },
    { id: 11, reason: "Me encanta cuando hacemos el amor. Yo me pierdo completo en ti." },
    { id: 12, reason: "Me encanta cuando nos escapamos." },
    { id: 13, reason: "Me siento en casa contigo" },
    { id: 14, reason: "Amo bailar contigo" },
    { id: 14, reason: "Me encanta tomar contigo" },
    { id: 15, reason: "Me gusta hacerte sonrojar" },
    { id: 16, reason: "Tus detallitos" },
    { id: 17, reason: "Nuestras bajaditas" },
    { id: 18, reason: "Lo mucho que me inspiras." },
    { id: 19, reason: "Amo cuando me dices 'gordo'" },
    { id: 20, reason: "Me encantan nuestros temas" },
    { id: 21, reason: "Amo dormir contigo" },
    { id: 22, reason: "Amo tus bailes random cuando escuchas tu musica lacrix" },
    { id: 22, reason: "No sales de mi cabeza." },
    { id: 22, reason: "Tu qlote bebe ❤" },
  ];

  getRandomReason(reasons);
}

main();