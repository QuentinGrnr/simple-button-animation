var buttons = document.querySelectorAll(".button")

var createanimatedbutton = function (button){
    var divright = document.createElement('div')
    divright.className = 'div-right'
    button.appendChild(divright)

    var divleft = document.createElement('div')
    divleft.className = 'div-left'
    button.appendChild(divleft)

    button.classList.add('new-button-property')

    var textbutton = document.createElement("span")
    textbutton.textContent = button.innerText
    button.appendChild(textbutton)
    textbutton.parentElement.insertBefore(textbutton, divleft.nextSibling)
    button.firstChild.textContent=""
}

for(var i = 0; i < buttons.length; i++){
    createanimatedbutton(buttons[i])
}