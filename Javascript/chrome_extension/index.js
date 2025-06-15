let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputbtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=""
    console.log(myLeads)
    render()
})

function render(){
let listitems = ""
for (i=0; i<myLeads.length;i++){
    // listitems+="<li><a target='_blank' href='"+ myLeads[i]+"'>"+myLeads[i]+"</a></li>"
    listitems +=`
    <li>
    <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}
    </a>
    s</li>`
}

ulEl.innerHTML = listitems
}