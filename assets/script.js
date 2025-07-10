// dichiaro il bottone
const button = document.getElementById(`button`)
//imposto il prezzo al valore base, senza sconti e inizializzo la variabile che conterrà il biglietto scontato
let basePrice = 0;
let ticketPrice = 0;

//genero la funzione del costo del biglietto
function discount(years) {
  if (years < 18) {
    ticketPrice = basePrice*0.8
  }
    else if (years > 64) {
      ticketPrice = basePrice*0.6
    }
    else {ticketPrice=basePrice}
    return ticketPrice
}
//do al bottone la funzione di prendere i dati inseriti
button.addEventListener(`click`, (e) => {
  //prevengo il valore di default
  e.preventDefault()
  const age = document.getElementById(`age`).value
  const distance = document.getElementById(`distance`).value
  basePrice = distance * 0.21
  console.log(age, distance)
  discount(age)
  console.log(basePrice)
  console.log(ticketPrice)
  }
)




