const saveButton = document.getElementById('save')   //btton del nome
const resetButton = document.getElementById('reset')  //button del reset
const input = document.getElementById('name-input') //il campo di input
const savedName = document.getElementById('saved-name')  //h2 che mostra il nome

//salvo il mio nome
 const saveName = function(){
    const inputValue = input.value    //recupero il valore dell'input
    localStorage.setItem('input-name', inputValue)   //salvo il valore nel localStorage
    functionSavedName()  //aggiorno l'h2 che mostra il nome
    input.value = ''  //ripulisco l'input dopo aver salvato il nome
 }
 saveButton.addEventListener('click', saveName)   //richiamo la mia funzione saveName quando clicco il button save

//resetto il mio nome
 const resetName = function(){
    input.value =''                      //pulisco l'input
    localStorage.removeItem('input-name')//rimuovo il nome salvato da localStorage 
    savedName.innerText = ''             //pulisco l'h2 del nome
    alert('Name removed')                //mostro un alert che il nome e stato rimosso
 }
 resetButton.addEventListener('click', resetName)  //richiamo la funzione resetName quando clicco il button reset

//aggiorno h2
 const functionSavedName = function(){
    const name = localStorage.getItem('input-name')        //recupero il nome da localStorage
    if(name){                                              //se esiste un nome salvato 
        savedName.innerText = `The saved name is ${name}`   //mostro il testo + il nome salvato
    } else{                                                  //altrimenti
        saveName.innerText = ''                              //una stringa vuota
    }
 }
 document.addEventListener('DOMContentLoaded',functionSavedName)    //ascolto la funzione quando il DOM e caricato

 ////timer
  const myTimer = document.getElementById('timer')      //div del timer
  let counterTime = sessionStorage.getItem('counterTimer') ? parseInt(sessionStorage.getItem('counterTimer'), 10) : 0;  //salvo in una variabile il valore del timer salvato da session storage e se non esiste lo inposto a 0. con 10 specifico che la stringa deve essere decimale

//scrivo una funzione per aggiornare il timer
const aggTimer = function(){
   counterTime++                                   //faccio rifferimento alla variabile di prima e incremento il valore del timer di 1
   myTimer.innerText = `Timer: ${counterTime}`     //aggiorno il timer
   sessionStorage.setItem('counterTimer',counterTime)  //salvo il valore del timer in sessionStorage
}
setInterval(aggTimer, 1000)  //aggiorno il mio timer ogni 1000 millisecondi(1 secondo) chiamando la funzione
document.addEventListener('DOMContentLoaded', function(){   //inposto il timer quando il DOM e caricato
myTimer.innerText = `Timer: ${counterTime}`
})
