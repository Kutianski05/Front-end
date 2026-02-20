const form = document.getElementById("formCadastro");

form.addEventListener("submit", function (event){
    event.preventDefault()

    const dados = {
        nome: document.getElementById("nome").value
    
    };

    console.log(dados)
})