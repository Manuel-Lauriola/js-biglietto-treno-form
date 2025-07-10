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
  let ageClass = ``;
  if (age < 18) {
    ageClass = `In quanto minorenne godi di uno sconto del 20%`
  }
    else if (age > 64) {
      ageClass = `In quanto senior godi di uno sconto del 40%`
    }
    else {ageClass = `Non ci sono sconti a disposizione`}
  document.getElementById(`class`).innerText = (ageClass)
  document.getElementById(`km`).innerText = (`avendo sceldo una tratta di ${distance}km`)
  document.getElementById(`final-price`).innerText = (`il costo del tuo biglietto è di € ${ticketPrice.toFixed(2)}`)
  }
)




