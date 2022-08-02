const form = document.getElementById('form')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')


form.reset() // resets the form on page reload

let emailTemplate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let emailValue = () => {
    if (email.value.match(emailTemplate)) return true
    else false
}

let isValid = false

let validateInputs = (element) => {
    if (!isValid) return

    resetForm(firstName)
    resetForm(lastName)
    resetForm(email)
    resetForm(password)

    if (!firstName.value) {
        validity(firstName)
    }
    if (!lastName.value) {
        validity(lastName)
    }
    if (!emailValue()) {
        validity(email)
    }
    if (!password.value) {
        validity(password)
    }
}


const resetForm = (element) => {
    element.nextElementSibling.classList.add('hidden')
    element.classList.remove('error')
}

const validity = (e) => {
    e.nextElementSibling.classList.remove('hidden')
    e.classList.add('error')
}

inputs = [firstName, lastName, email, password]

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs()
    })
});



form.addEventListener('submit', (e) => { //main call function
    isValid = true
    e.preventDefault()
    validateInputs()

    form.reset() // if everything is correct, resets the form
})