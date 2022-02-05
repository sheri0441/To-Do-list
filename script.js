const button = document.getElementById(`btn`);
const list = document.querySelector(`ul`);
const input = document.querySelector(`input`);


button.addEventListener(`click`, function(){
    let item = document.createElement(`li`);
    item.innerText = input.value;
    list.appendChild(item);
    input.value = ``;
    item.addEventListener(`click`, function(){
        item.classList.toggle(`strike-through`)
    });
    item.addEventListener(`dblclick`, function(){
        list.removeChild(item)
    })

})


