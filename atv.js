const form = document.getElementById("formCadastro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    console.log("Nome:", nome);
    console.log("Email:", email);

    alert("Cadastro realizado com sucesso!");
});