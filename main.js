const btn = document.getElementById('toggleListBtn')
const rows = document.getElementById('compList').children[0].children
const nHideRows = 4
let hidden = true

function toggleList (){
    if(true){
        let i
        for(i = rows.length - 1; i > rows.length - nHideRows; i--){
            rows[i].classList.toggle('hidden')
        }
    }
}