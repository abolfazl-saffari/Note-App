let $ = document
let inputSelect = $.querySelector('#input-field')
let btnSave = $.querySelector('#btn-save')
let btnDelete = $.querySelector('#btn-delete')
let listed = $.querySelector('#listed')
let colorBoxes = $.querySelectorAll('.color-box')
let color = ''

colorBoxes.forEach(function (colorBox) {
    colorBox.addEventListener('click', Color)
})

btnSave.addEventListener('click', listAddRemove)
btnDelete.addEventListener('click', () => {
    inputSelect.value = ''
    inputSelect.style.backgroundColor = ''
})

function listAddRemove() {
    if (inputSelect.value.trim() !== '') {
        addCard()
        removeCard()
    }
    color = ''
    inputSelect.style.backgroundColor = ''
}

inputSelect.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        listAddRemove()
    }
})


function addCard() {
    let pText = inputSelect.value
    let createDiv = $.createElement('div')
    createDiv.className = 'card shadow-sm rounded'
    let createP = $.createElement('p')
    createP.className = 'card-text p-3'
    createP.innerHTML = pText
    createDiv.appendChild(createP)
    createDiv.style.backgroundColor = color
    listed.appendChild(createDiv)
    inputSelect.value = ''
}

function removeCard() {
    let cards = $.querySelectorAll('.card-text')
    cards.forEach((element) => {
        element.addEventListener('click', (elem) => {
            elem.target.parentElement.remove()
        })
    })
}

function Color(colorPick) {
    color = colorPick.target.style.backgroundColor
    inputSelect.style.backgroundColor = color
}