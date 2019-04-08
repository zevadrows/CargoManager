
//cadastro usuário


var usuarios = [];
var veiculos = [];

var selectMotorista = document.getElementById("motoristas");

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
    atualizarOpcoes();

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
    atualizarOpcoes();
    document.getElementById("cadastroVeiculo").reset();

    return false;
});

function atualizarOpcoes() {
    document.getElementById("motoristas").innerHTML = "";
    document.getElementById("veiculos").innerHTML = "";
    for (i in usuarios) {
        document.getElementById("motoristas").innerHTML += '<option value="" >' + usuarios[i].nome + '</option>';
    }
    for (i in veiculos) {
        document.getElementById("veiculos").innerHTML += '<option value="" >' + veiculos[i].placa + '</option>';
    }

}


//cadastro agendamento
//opções de motorista
