var  tablinks = document.getElementsByClassName("tab-links");
var  tabcontents = document.getElementsByClassName("tab-contents");
var sidebar = document.getElementById('sidebar')

function opentab(tabname){
    for(i of tablinks){
        i.classList.remove("active-link")
    }
    for(i of tabcontents){
        i.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// --------set the right on nav ul of css to 0 which will display the sidebar-----
function openbar(){
    sidebar.style.right = '0';
}

function closebar(){
    sidebar.style.right = '-200px';
}


// -----form to sheets----
const scriptURL = 'scripturl'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = " Message Sent Successfully";
        setTimeout(function(){
            msg.innerHTML = ""
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})