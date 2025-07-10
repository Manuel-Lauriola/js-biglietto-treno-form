// dichiaro il bottone
const button = document.getElementById(`button`)
//do al bottone la funzione di prendere i dati inseriti
button.addEventListener(`click`, (e) => {
  //prevengo il valore di default
  e.preventDefault()
  const age = document.getElementById(`age`).value
  const distance = document.getElementById(`distance`).value
  console.log(age, distance)
  }
)
