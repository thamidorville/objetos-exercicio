/*# Exercício 1

Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```

b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos** */

const sacolao = [];
const fruta = {
    nome: `banana`,
    preco: `R$:` + 1.95,
    disponibilidade: true}
    const fruta2 = {nome: `uva`,
    preco: `R$:` + 2.00,
    disponibilidade: false}

    const fruta3 = {nome: `maçã`,
    preco: `R$:` + 3.90,
    disponibilidade: true}

sacolao.push(fruta, fruta2, fruta3);
console.log(sacolao) /* (3) [{…}, {…}, {…}]
0
: 
{nome: 'banana', preco: 'R$:1.95', disponibilidade: true}
1
: 
{nome: 'uva', preco: 'R$:2', disponibilidade: false}
2
: 
{nome: 'maçã', preco: 'R$:3.9', disponibilidade: true}
length
: 
3 */ 
