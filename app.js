
//cadastro usuário


var usuarios = [];



$('#cadastroUsuario').submit(function () {
    var usuario = {
        nome: document.getElementById("nomeUsuario"),
        sobrenome: document.getElementById("sobrenomeUsuario"),
        cpf: document.getElementById("cpf"),
        cnh: document.getElementById("cnh"),
        dataNascimento: document.getElementById("dataNascimento"),
        enderecoUsuario: document.getElementById("enderecoUsuario"),
        numeroEndereco: document.getElementById("numeroEndereco"),
        complementoEndereco: document.getElementById("complementoEndereco"),
        emailUsuario: document.getElementById("emailUsuario"),
        celularUsuario: document.getElementById("celularUsuario")
    }
    localStorage.setItem('user', usuario);
    usuarios.push(localStorage.getItem('user'));

    return false;
});

