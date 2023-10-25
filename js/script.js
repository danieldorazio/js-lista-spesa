// DATI
const listaSpesa = ["pane", "pasta", "latte", "yogurt"];
const ulList = document.querySelector("ul");
console.log(listaSpesa, ulList); 

// SVILUPPO

// creare variabile per indice dell'array = arrayIndex = 0 cosi da partire del primo elemento 
let arrayIndex = 0;

// Creare una variabile per result
let resul = "";

// - Creare il while con condizione (arrayIndex < array.length)
while (arrayIndex < listaSpesa.length) {
    // - Associare ed aggiungere alla variabile Result elemento dell'array con indice "arrayIndex" in list con template literals
    resul += `<li>${listaSpesa[arrayIndex]}</li>`;
    
    // - Incrementa arrayIndex 
    arrayIndex++    
}
console.log(resul);

// **Output**
// Inviare al Dom gli elementi della listra tramite Result
ulList.innerHTML += resul