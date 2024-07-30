/* 
1. Recuperiamo l'elemento dal DOM
2. Impostiamo l'age
3. Impostiamo un messaggio per presentare la password
4. Chiediamo il nome
5. Chiediamo il cognome
6. Chiediamo il colore preferito
7. Uniamo i dati per creare la password
8. Esponiamo il risultato nel DOM
*/

console.log('JS OK');

// Recupero l'elemento in pagina
const resultElement = document.getElementById('result');
console.log(resultElement);

// Raccolgo i dati

// AGE
const age = 25;

// Mesaggio per presentare la password
const message = `La tua password:`;

// NAME
const firstName = prompt('Come ti chiami?', 'Dordo');
console.log(firstName);

// LASTNAME
const lastName = prompt('Ed il cognome?', 'Dekanovic');
console.log(lastName);

const color = prompt('Il tuo colore preferito', 'verde');
console.log(color);

// CREO LA PASSWORD
const password = firstName + lastName + color + age;
console.log(password);

// Output della password
resultElement.innerHTML = `La tua password: ${password}`;