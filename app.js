
//cadastro usuário


var usuarios = [];
var veiculos = [];



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
    document.getElementById("cadastroUsuario").reset();
    
    return false;
});

//cadastro veículo

$('#cadastroVeiculo').submit(function () {
    var veiculo = {
        placa: document.getElementById("placaCaminhao").value,
        renavam: document.getElementById("numeroRenavam").value,
        anoFabricacao: document.getElementById("anoFabricacao").value,
        anoCompra: document.getElementById("anoCompra").value,
        cargaMaxima: document.getElementById("cargaMaxima").value,
        numeroEixos: document.getElementById("numeroEixos").value,
        comprimentoTotal: document.getElementById("comprimentoTotal").value        
    }
    veiculos.push(veiculo);
    document.getElementById("cadastroVeiculo").reset();
    
    return false;
});