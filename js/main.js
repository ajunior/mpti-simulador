/*
 *  Atualização automática da data e responsável pela última atualização do site,
 *  com base nas informações do último commit, usando a api do GitHub.
 * 
 */

const url = 'https://api.github.com/repos/ajunior/fileserver/branches/master';

var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function() {
    var data = request.response;
    lastUpdate(data);
}

function lastUpdate(data) {
    var dt = new Date(data.commit.commit.author.date).toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    var author = data.commit.commit.author.name;
    var ghLogin = data.commit.author.login;
    document.getElementById("last-updated").innerHTML = `Atualizado ${dt} por <a href="https://github.com/${ghLogin}" target="_blanket">${author}</a>.`;
}

/*
 *
 *
 *
 */

var notaPontCandidato = 0.0;
var notaPreProjeto = 0.0;
var pontuacaoTotal = 0.0;

