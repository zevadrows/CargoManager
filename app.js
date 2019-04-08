
//cadastro usuário


var usuarios = [];



$('#cadastroUsuario').submit(function () {
    var usuario = {
        nome: document.getElementById("nomeUsuario").value,
        sobrenome: document.getElementById("sobrenomeUsuario").value,
        cpf: document.getElementById("cpf").value,
        cnh: document.getElementById("cnh").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        enderecoUsuario: document.getElementById("enderecoUsuario").value,
        numeroEndereco: document.getElementById("numeroEndereco").value,
        complementoEndereco: document.getElementById("complementoEndereco").value,
        emailUsuario: document.getElementById("emailUsuario").value,
        celularUsuario: document.getElementById("celularUsuario").value
    }
    usuarios.push(usuario);
    
    return false;
});
