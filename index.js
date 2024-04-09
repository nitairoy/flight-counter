// 1. Grav the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count // innerText only human readable text comes instead use textContent
    
}



function save() {
    // 2. Create a variable that contains both the count and the dash separator,
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr // only human readable text 
    countEl.textContent = 0
    count = 0
}

// google
// innerText alternative mdn
