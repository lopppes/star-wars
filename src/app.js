const cardsList = document.querySelectorAll(".cartao");
const nextButton = document.getElementById("btn-avancar");
const prevButton = document.getElementById("btn-voltar");

let currentCardIndex = 0;

function hideSelectedCard() {
  const selectedCard = document.querySelector(".selecionado");
  selectedCard.classList.remove("selecionado");
}

function showCard(cardIndex) {
  cardsList[cardIndex].classList.add("selecionado");
}

nextButton.addEventListener("click", function () {
  if (currentCardIndex === cardsList.length - 1) return;

  hideSelectedCard();

  currentCardIndex++;
  showCard(currentCardIndex);
});

prevButton.addEventListener("click", function () {
  if (currentCardIndex === 0) return;

  hideSelectedCard();

  currentCardIndex--;
  showCard(currentCardIndex);
});
