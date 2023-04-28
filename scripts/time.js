let date = new Date()
let dateModified = new Date(document.lastModified);
/* document.getElementById("year").textContent = d.getFullYear() */
document.querySelector("#copyright").innerHTML = date.getFullYear()
document.getElementById("last_updated").textContent = dateModified.toLocaleString()