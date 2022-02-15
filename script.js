const button = document.getElementById(`btn`);
const list = document.querySelector(`.list`);
const input = document.querySelector(`input`);

const createList = () => {
    let item = document.createElement(`div`);
    item.classList.add(`flex`);
    let checkBox = document.createElement(`input`);
    checkBox.setAttribute(`type`, `checkbox`);
    let textLine = document.createElement(`li`)
    textLine.classList.add(`mar-l-5`);
    textLine.innerText = input.value
    textLine.style.listStyle = `none`;
    let otherchild = document.createElement(`button`);
    otherchild.classList.add(`btn`);
    otherchild.innerText = `Remove`
    item.appendChild(checkBox);
    item.appendChild(textLine);
    item.appendChild(otherchild);
    list.appendChild(item);
    input.value = ``;

    checkBox.addEventListener(`change`, function(){
        (checkBox.checked)? textLine.classList.add(`strike-through`): textLine.classList.remove(`strike-through`);
        }
    );
    textLine.addEventListener(`click`, function(){
        textLine.classList.toggle(`strike-through`);
        (checkBox.checked)?checkBox.checked = false:checkBox.checked = true; 
        }
    )
    otherchild.addEventListener(`click`, function(){
        list.removeChild(item)
    })
}

const mouseClick = () => {
    if (input.value.length > 0) {
        createList()
    }
}
const enterPress = (event) => {
    if (input.value.length > 0 && event.keyCode === 13 ) {
        createList()
    }
}
button.addEventListener(`click`, mouseClick);
input.addEventListener(`keypress`, enterPress);


