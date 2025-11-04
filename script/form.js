// KEY
const KEY = "memory";

// PULSANTI
const salvaButton = document.getElementById("save");
const resetButton = document.getElementById("reset");

// content TEXT AREA
const textArea = document.getElementById("content");

// PULSANTI ADD EVENT LISTENER - CLICK - SALVA
// quando scrivo e faccio salva con click, mando tutto nella const text area contet. naturalmente il tutto deve
// essere salvato. e quindi sparo tutto in local storage. memorizzo quindi in KEY che è la memoria e gli diamo
salvaButton.addEventListener("click", () => {
  const textAreaContent = textArea.value; // .value prende ciò che è stato scritto nel browser
  console.log("il contenuto attuale è", textAreaContent);
  localStorage.setItem(KEY, textAreaContent); // qua spingo in local storage facendo set item cioò salvo nel browser, però dico di salvarlo in key, cosa? text area contet che si è riempito
});

// 3) PULSANTE DI RESET
resetButton.addEventListener("click", () => {
  //Pulsante che svuola la textarea del browser quando cliccato
  textArea.value = "";
  localStorage.removeItem(KEY); // qua inserisco comando che non solo al click cancella quatno scritto in browser ma
}); // cancella pure la memoria del browser (key) con remove item
