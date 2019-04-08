
//cadastro usuário


var usuarios = [];


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
var veiculos = [];

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
        document.getElementById("motoristas").innerHTML += '<option value="' + usuarios[i].nome + '" >' + usuarios[i].nome + '</option>';
    }
    for (i in veiculos) {
        document.getElementById("veiculos").innerHTML += '<option value="' + veiculos[i].placa + '" >' + veiculos[i].placa + '</option>';
    }

}


//cadastro agendamento
var agendamentos = [];
$('#listagemAgendamento').submit(function () {
    var agendamento = {
        motorista: document.getElementById("motoristas").value,
        veiculo: document.getElementById("veiculos").value,
        dataEntrada: document.getElementById("dataEntrada").value,
        dataSaida: document.getElementById("dataSaida").value,
        operacao: document.getElementById("operacao").value,
    }
    agendamentos.push(agendamento);
    agendar();
    document.getElementById("listagemAgendamento").reset();

    return false;
});

function agendar() {
    document.getElementById("bodyAgendamento").innerHTML = "";
    var n = 0;
    for (i in agendamentos) {
        n++;
        document.getElementById("bodyAgendamento").innerHTML +=
            '<tr>'
            + '<th scope="row">' + n + '</th>'
            + '<td value="' + agendamentos[i].motorista + '">' + agendamentos[i].motorista + '</td>'
            + '<td value="' + agendamentos[i].veiculo + '">' + agendamentos[i].veiculo + '</td>'
            + '<td>' + agendamentos[i].dataEntrada + '</td>'
            + '<td>' + agendamentos[i].dataSaida + '</td>'
            + '<td>' + agendamentos[i].operacao + '</td>'
            + '</tr>';
    }
}
