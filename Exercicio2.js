const leia = require('readline-sync')

let n1, n2, n3 ,n4 
let mediaNs

console.log("*- CALCULO DE MÉDIA DE NOTAS -*")

n1 = leia.questionFloat("Digite a primeira nota: ")
n2 = leia.questionFloat("Digite a segunda nota: ")
n3 = leia.questionFloat("Digite a terceira nota: ")
n4 = leia.questionFloat("Digite a quarta nota: ")

mediaNs = (n1 + n2 + n3 + n4) / 4

console.log("\n*Calculando a média...*")
console.log(`A sua média de notas é: ${mediaNs}`)
