
const searchButton = document.getElementById('searchButton')

searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    const searchInput = document.getElementById('searchInput')
    const textInput = document.getElementById('textInput')

    const displayContainer = document.getElementById('displayContainer')
    displayContainer.innerHTML = textInput.value
})