const url= "https://randomuser.me/api/"

const VALUE_MAP = {
name : "Hi, My name is",
email : "My email address is",
calendar : "My Birthday is",
map : "My address is",
phone : "My phone number is",
password : "My password is",
}

var val=fetch(url)
let STATE = null; 
val.then(resp=>resp.json()).then(json=(json)=>{
    // console.log(json.results[0].picture)
        const {picture : {large : picurl },name,email,phone,dob, location,login : {password}} = json.results[0];
        STATE = {name:`${name.first} ${name.last}`, email,picurl,phone,password,map : `${location.city}, ${location.country}`, calendar : dob.date.slice(0,10)};
        // console.log(STATE)
        renderOnUI() 
})

function renderOnUI() {
    if(STATE)
    { const {name, email,picurl} = STATE
      const picEl = getEl(".pic");
      picEl.style.background = `url(${picurl})`;
      renderTextOnUI('Hi, My name is',name);
     getEl('.smallIcon').onmouseover = handleHover;
    }
}
function renderTextOnUI(firstValue,secondValue) {
    // secondValue= pwd;
    // console.log(secondValue)
    setElVal('.first',firstValue)
    setElVal('.second',secondValue)

}

function handleHover(e){
    const id = (e.target.id);
    // console.log(id)
    if(id){
        // console.log(id)
        // console.log(STATE[id])
     renderTextOnUI(VALUE_MAP[id],STATE[id] || "NA")  
    //  console.log(STATE[id])
    }
}

function getEl(selector) {
    console.log(selector)
    return document.querySelector(selector);  
}
function setElVal(selector,value) {
    document.querySelector(selector).innerText = value;
}

