const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log(pokemon1);
// a) Crie uma cópia do objeto, acima, mantendo a estrutura, 
//mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const novoPokemon1 = {
    ...pokemon1,
    nome: `Squirtle`,
    tipo: `Água`
}
console.log(novoPokemon1);
//b) No objeto original, adicione mais uma propriedade, 
//chamada `ataques`. Esta propriedade deve guardar 
//um **array** que deve começar vazio.
pokemon1.ataques = [];
console.log(pokemon1); // {nome: 'Bulbasaur', tipo: 'Grama', nivel: 5, ataques: Array(0)}

/*c-) crie um objeto de `ataque` com a estrutura abaixo e o adicione no 
array `ataques` utilizando `**push()**`

```
nome: Investida,
dano: 40,
tipo: Normal,
precisao: 100,*/

const ataque = { 
    nome: `Investida`,
    dano: 40,
    tipo: `Normal`,
    precisao: 100
}
;
pokemon1.ataques.push(ataque);
console.log(pokemon1.ataques); /*[{…}]
0
: 
{nome: 'Investida', dano: 40, tipo: 'Normal', precisao: 100}
length
: 
1
[[Prototype]]
: 
Array(0)*/

console.log(pokemon1.ataques); /*[{…}]
0
: 
{nome: 'Investida', dano: 40, tipo: 'Normal', precisao: 100}
length
: 
1
[[Prototype]]
: 
Array(0) */

//c) Na cópia do objeto original, adicione a 
//propriedade **`ataques`** a partir do **espalhamento** 
//da propriedade de mesmo nome criada para o objeto original;

novoPokemon1.ataques = [...pokemon1.ataques]
console.log(novoPokemon1.ataques); 

//d) para o objeto original, adicione o 
//ataque **“Folha Navalha”,** com **45 de dano**, 
//**100 de precisão**, e de tipo **“Grama”**; no array de `ataques`
    
pokemon1.ataques = [{
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisão: 100
}]
console.log(pokemon1.ataques); //[{…}]
//0: 
//{nome: 'Folha Navalha', dano: 45, tipo: 'Grama', precisão: 100}
//length:1

//e) para a cópia, 
//crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**,
// e do tipo **“Água”**; e adicione no array.

novoPokemon1.ataques = [{
nome: "Jato de Água",
dano: 40,
tipo: "Água",
precisao: 100
}]
console.log(novoPokemon1.ataques); //[{…}]
//0: 
//{nome: 'Jato de Água', dano: 40, tipo: 'Água', precisao: 100}
//length:1
console.log(pokemon1.ataques)
console.log(pokemon1)

const ataque2 = [{
    nome: "Jato de Água",
dano: 40,
tipo: "Água",
precisao: 100
}]
novoPokemon1.ataques = ataque2;
console.log(novoPokemon1.ataques) // [{…}]
//0: {nome: 'Jato de Água', dano: 40, tipo: 'Água', precisao: 100}
//length: 1

//f) Imprima os dois objetos  do tipo pokemon no console.
console.log(pokemon1.tipo + " e ",  novoPokemon1.tipo); //Grama e  Água





