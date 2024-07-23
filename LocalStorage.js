const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')
const input = document.getElementById('name-input')
const savedName = document.getElementById('saved-name')

 const saveName = function(){
    const inputValue = input.value
    localStorage.setItem('input-name', inputValue)
    functionSavedName()
 }


 saveButton.addEventListener('click', saveName)

 const resetName = function(){
    input.value =''
    localStorage.removeItem('input-name')
    savedName.innerText = ''
    alert('Name removed')
 }
 resetButton.addEventListener('click', resetName)

 const functionSavedName = function(){
    const name = localStorage.getItem('input-name')
    if(name){
        savedName.innerText = `The saved name is ${name}`
    } else{
        saveName.innerText = ''
    }
 }
 document.addEventListener('DOMContentLoaded',functionSavedName)