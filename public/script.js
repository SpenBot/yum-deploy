


let typeDropDown = document.getElementById('typeSelect')
let zipcodeDropDown = document.getElementById('zipcodeSelect')
let cityDropDown = document.getElementById('citySelect')
let deliveryDropDown = document.getElementById('deliverySelect')


if (typeDropDown) {
  typeDropDown.addEventListener('change', (e) => {

    e.preventDefault()

    let url = '/search?qk=type&qv='
    let query = e.target.value

    window.location.replace(`${url}${query}`)

  })
}

if (zipcodeDropDown) {
  zipcodeDropDown.addEventListener('change', (e) => {

    e.preventDefault()

    let url = '/search?qk=zipcode&qv='
    let query = e.target.value

    window.location.replace(`${url}${query}`)

  })
}

if (cityDropDown) {
  cityDropDown.addEventListener('change', (e) => {

    e.preventDefault()

    let url = '/search?qk=city&qv='
    let query = e.target.value

    window.location.replace(`${url}${query}`)

  })
}

if (deliveryDropDown) {
  deliveryDropDown.addEventListener('change', (e) => {

    e.preventDefault()

    let url = '/search?qk=delivery&qv='
    let query = e.target.value

    window.location.replace(`${url}${query}`)

  })
}
