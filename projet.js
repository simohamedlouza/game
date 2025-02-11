
  var image = document.getElementById("iman");

  image.onmouseover = function() {
      image.src = "./image/toptop22.png";  
  }

  image.onmouseout = function() {
      image.src = "./image/memem1.png";  
}
function separer() {
    var txt = document.getElementById('txt').value;
    var vide = txt.indexOf(' ');
    var a = txt.slice(0,vide);
    var b = txt.slice(vide+1);

    document.getElementById("r1").value = "NOM : "+a;
    document.getElementById("r2").value = "PRENOM : "+b;
    
}


let f = document.getElementById('for') // div ==> input 

const btg = document.getElementById('btg') // button => click

btg.addEventListener('click', ()=>{

    // f.classList.add('hide')

    f.classList.remove('hide')
    separer()



})


document.getElementById("countrySelect").addEventListener("change", function() {
    let countryCode = this.value;
    let phoneInput = document.getElementById("phonee");
    
    // Prepend country code if not already included
    if (!phoneInput.value.startsWith(countryCode)) {
        phoneInput.value = countryCode + " ";
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const bubblesContainer = document.getElementById("bubblesContainer");
    for (let i = 0; i < 128; i++) {
        let bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.setProperty("--size", `${2 + Math.random() * 4}rem`);
        bubble.style.setProperty("--distance", `${6 + Math.random() * 4}rem`);
        bubble.style.setProperty("--position", `${-5 + Math.random() * 110}%`);
        bubble.style.setProperty("--time", `${2 + Math.random() * 2}s`);
        bubble.style.setProperty("--delay", `${-1 * (2 + Math.random() * 2)}s`);
        bubblesContainer.appendChild(bubble);
    }
});



