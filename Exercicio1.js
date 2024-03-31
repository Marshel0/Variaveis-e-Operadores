const leia = require('readline-sync')

console.log("* Calculo de Abono Salarial. *")

let salario
let abono
let calculoAbono

salario = leia.questionFloat("Digite o valor do seu Salario: ")
console.log(`Seu Salario é R$ ${salario}`)

abono = leia.questionFloat("Agora, digite o valor do Abono Salarial: ")
console.log(`O valor do Abono Salarial é R$ ${abono}`)

console.log("* Calculando... *")

calculoAbono = salario + abono

console.log(`O valor do seu novo Salario é R$ ${calculoAbono}`)


