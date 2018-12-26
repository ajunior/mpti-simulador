/*
 *  Atualização automática da data e responsável pela última atualização do site,
 *  com base nas informações do último commit no repositório do projeto, 
 *  usando a api do GitHub. 
 */

fetch ('https://api.github.com/repos/ajunior/mpti-simulador/branches/master')
    .then(function (response) { return response.json(); })
    .then(function (data) {
        const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let dt = new Date(data.commit.commit.author.date).toLocaleDateString('pt-BR', dateFormat);
        let author = data.commit.commit.author.name;
        let ghLogin = data.commit.author.login;
        let str = `Atualizado ${dt} por <a href="https://github.com/${ghLogin}" target="_blanket">${author}</a>.`;
        document.getElementById("last-updated").innerHTML = str;
    });

/*
 *
 *
 * 
 */

var notaCandidato = 0.0;
var notaPreProjeto = 0.0;
var pontuacaoTotal = 0.0;

function calcTotalPontuacaoCandidato () {
    
}

document.addEventListener('DOMContentLoaded', function() {
    //document.querySelector('input[name="curso"]').onchange = (function () { 
    document.querySelectorAll('input[type="checkbox"]').onchange = (function () { 
        console.log(this.name)
    });


}, false);

/*
 *  Bootstrap
 */

