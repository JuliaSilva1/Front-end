const visor = document.querySelector("#visor");

//adicionando um ouvinte ao evento para keyoudown no documento.

document.addEventListener("keydown", (event) =>{
    if(event.key === "a" || event.key === "A")
    {
        visor.textContent = "Tecla A pressionada";
    }
    else if(event.key === "d" || event.key === "D")
    {
        visor.textContent = "Tecla D pressionada";
    }
     visor.textContent = event.key;
})