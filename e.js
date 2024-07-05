let nome = 'joao'
console.log(nome)


// exercicio 2
let a =5, b = 10, soma
soma = a + b
console.log(soma)

//exercicio 3
let primeironome = 'josefa', segundonome = 'silva'
console.log(primeironome, segundonome)

//exercicio 4

let pessoa = {
nome : 'Cleiton',
idade : '18',
endereço : 'Ararangua',
telefone : 992947634,
}

//exercicio 5
let numeros = [1, 2, 3, 4, 5]
console.log(numeros[0], numeros[4])
let frutas = [ "banana", "laranja" ]
frutas [4]
frutas.push("abacate")
console.log(frutas)
frutas.push("abacate")
console.log(frutas[0], frutas[frutas.lenght-1])


//exercicio 6
let cores = ['vermelho', 'verde', 'azul' ]
for(let i = 0; i < 10; i++){
console.log(cores)
}

// exercicio 7
let idade = 18
if(idade < 18){
console.log('menor')
}else{
console.log('maior')
}

//exercicio 8
let nota = 8
if(nota >=7){
console.log('aprovada')
}else{
console.log ('recuperação')
}

//exercicio 9
let diadasemana = 7
switch (diadasemana){
case 1 : {
console.log('domingo')
break
}

case 2 : {
console.log('segunda')
break
}
case 3 : {
console.log('terca')
break
}
case 4 : {
console.log('quarta')
break
}

case 5 : {
console.log('quinta')
break
}

case 6 : {
console.log('sexta')
break
}

case 7 : {
console.log('sabado')
break
}
}

//Exercicio 10
let numeros2 = 10


// Exercicio 14 

let vetor = [5,4,9,4,6,4,4,12,8]
let maior = o, n = 0
while ( n < vetor.length){
     if(vetor > maior)
          maior = vetor[n]
}
n++


//Exc. 16 

n = 10 
let fatorial = 1
for(i = 1, i <=n; i++){
     fatorial *= i
}


//Exc. 17 

for( i=1, i <= 10, i++){
     if(i % 2 == 0) {
          console.log(i,"Ele é par")
     }else{ 
          console.log(i," é impar")
     }
}