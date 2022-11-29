const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
//a) Qual o código para imprimir o nome do **primeiro** ator/atriz? 

console.log(filme.elenco[0]); // Matheus Nachtergaele;

//b) Qual o código para imprimir o nome do **último** ator/atriz?

console.log(filme.elenco[3]); //Virginia Cavendish

//c) Qual o código para exibir o array com 
//**todas** as transmissões de hoje?

console.log(filme.transmissoesHoje);/*(3) [{…}, {…}, {…}]
0
: 
{canal: 'Telecine', horario: '21h'}
1
: 
{canal: 'Canal Brasil', horario: '19h'}
2
: 
{canal: 'Globo', horario: '14h'}
length
: 
3*/

//d) Qual o código para exibir o **horário** 
//de transmissão do filme no `Canal Brasil`?

console.log(filme.transmissoesHoje[1])


