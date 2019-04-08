
//cadastro usuário


var usuarios = [];



document.getElementById("btnCadastrarUsuario").addEventListener("click", function () {
    var usuario = [
    usuario.nome = document.getElementById("nomeUsuario"),
    usuario.sobrenome = document.getElementById("sobrenomeUsuario"),
    usuario.cpf = document.getElementById("cpf"),
    usuario.cnh = document.getElementById("cnh"),
    usuario.dataNascimento = document.getElementById("dataNascimento"),
    usuario.enderecoUsuario = document.getElementById("enderecoUsuario"),
    usuario.numeroEndereco = document.getElementById("numeroEndereco"),
    usuario.complementoEndereco = document.getElementById("complementoEndereco"),
    usuario.emailUsuario = document.getElementById("emailUsuario"),
    usuario.celularUsuario = document.getElementById("celularUsuario")
    ]
    usuarios.push(usuario);
    localStorage.setItem('usuarios', usuarios);

    console.log(usuarios[0]);
});




