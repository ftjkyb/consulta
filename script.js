function verificarDocumento() {
    const codigo = document.getElementById('codigo').value;

    const codigosValidos = {
        '123': {
            nome: 'Fulano de Tal',
            cpf: '123.456.789-00',
            curso: 'Curso X',
            cargaHoraria: '40 horas',
            instituicao: 'Instituição Y',
            local: 'Cidade Z',
            dataConclusao: '01/01/2023'
        },
        '456': {
            // Informações para outro código válido
            nome: 'Ciclano',
            cpf: '987.654.321-00',
            curso: 'Curso Y',
            cargaHoraria: '30 horas',
            instituicao: 'Outra Instituição',
            local: 'Cidade W',
            dataConclusao: '15/03/2023'
        },
        // Adicione mais códigos e informações conforme necessário
    };

    if (codigo in codigosValidos) {
        document.getElementById('resultado').innerText = 'Documento válido!';
        document.getElementById('resultado').style.color = 'green';

        // Preencher informações para o código específico
        document.getElementById('nome').innerText = codigosValidos[codigo].nome;
        document.getElementById('cpf').innerText = codigosValidos[codigo].cpf;
        document.getElementById('curso').innerText = codigosValidos[codigo].curso;
        document.getElementById('cargaHoraria').innerText = codigosValidos[codigo].cargaHoraria;
        document.getElementById('instituicao').innerText = codigosValidos[codigo].instituicao;
        document.getElementById('local').innerText = codigosValidos[codigo].local;
        document.getElementById('dataConclusao').innerText = codigosValidos[codigo].dataConclusao;

        // Exibir as informações
        document.getElementById('info').style.display = 'block';
    } else {
        document.getElementById('resultado').innerText = 'Documento inválido!';
        document.getElementById('resultado').style.color = 'red';
        // Esconder as informações se o documento for inválido
        document.getElementById('info').style.display = 'none';
    }
}