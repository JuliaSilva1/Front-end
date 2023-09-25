//selecionando o botao pelo id
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");
const zerar = document.querySelector("#zerar");

//inicializando contador 
let contador = 0;

//função que sera chamada quando o botao for clicado
function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}

//adicionando ouvinte do evento para clique do botao

botao.addEventListener("click", aumentarContador);

let contador2 = contador;

function diminuirContador()
{
    if (contador == 0){
        alert("não da para diminuir mais")
        return
    }
   
    contador--;
    contadorElemento.textContent = contador;
    
}
diminuir.addEventListener("click", diminuirContador)

function zeraContador()
{
    contadorElemento.textContent = 0;
}
zerar.addEventListener("click",zeraContador)

