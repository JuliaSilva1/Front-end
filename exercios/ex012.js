var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function enviarResposta() {
    
    var idade = document.querySelector("#idade").value;
    var nome = document.querySelector("#nome").value;
    var cidade = document.querySelector("#cidade").value;
    if (idade >= 0 || idade <= 190) {
        
    }
    else {
        ExibirAlertaErro("Idade digitada é inválida");
        return
    }
    if (nome == "" || idade == "" || cidade ==""){

        document.querySelector("#mostrar").innerHTML = `<div class="alert alert-info fade show" role="alert">
                    <span>Preencher campos </span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
                </div>`
                return
        }
    
    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML = `<div class="alert alert-success fade show" role="alert">
                    <span> ${nome} tem ${idade} e mora em ${cidade} </span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
                </div>`
        }
        else {
            //document.querySelector("#mostrar").innerHTML = ` `;
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 50);    
}

function ExibirAlertaErro(texto){
    document.querySelector("#mostrar").innerHTML = `<div class="alert alert-danger fade show" role="alert">
                    <span> ${texto} </span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
                </div>`;
}