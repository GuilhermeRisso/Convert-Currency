const Convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-Select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect)
    const dolarToday = 5.2
    const euroToDay = 6.2
    const libraToDay = 6.3
    const BitcoinToDay = 355350.60

    const convertedValue = inputCurrencyValue / dolarToday
    const convertedValeEuro = inputCurrencyValue / dolarToday

    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToDay)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToDay )
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency:"BTC"
        }).format(inputCurrencyValue / BitcoinToDay )

    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
 
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyIMG = document.querySelector(".united-states")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyIMG.src ="./assets/dolar.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyIMG.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML ="Libra"
        currencyIMG.src = "./assets/libra 1.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "bitcoin"
        currencyIMG.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
Convertbutton.addEventListener("click", convertValues)