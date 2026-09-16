const prompt = require("prompt-sync")() // npm install prompt-sync
let vet = [] // define vetor
let mat = [] // define matrix
// entrada de dados
for(let i=0;i<4;i++) { // para cada jogador
    let objeto = {
        nome: prompt("informe nome do jogador"),
        time: prompt("informe time do jogador"),
        posicao: prompt("informe posição do jogador")
    }    
        vet [i] = objeto // adiciona objeto no vetor
        mat [i] = [] //cria um vetor dentro da matriz
        for(let j=0;j<3;j++){
            mat[i][j] = parseInt(Math.random() * 5) // de 0 a 4
        }
    
}
console.log("Gols marcados em cada partida")
console.log(mat)

// media de gols por jogador
let maior = 0 // maior media
for(let i=0;i<4;i++){
    let soma = 0
    for(let j=0;j<3;j++){ // para cada partida
        soma += mat[i][j]
    }
    let media = soma / mat[i].length
    if(media > maior){
        maior = media
        posMaior = 1
    }
    console.log(vet[i].nome + " fez media de " + media.toFixed(2) + " gols por partida ")
}
console.log(vet[posMaior].nome + " que joga na posição " + vet[posMaior].posicao + " tem maior media" + maior.toFixed(2)) 

// media de gols por partida
let menor = 100 // guarda menor media
let posMenor = 0 // guarda posição da menor media (j)
for(let j = 0; j < 4; j++){
    let soma = 0
    for(let i = 0; i < 4; i++){
        soma += mat[i][j]
    }
    let media = soma / mat.length
    if (media < menor){
        menor = media
        posMenor = j
    }
    console.log("A partida " + j + "teve media de gols = " + media.toFixed(2))
}
console.log("A partida " + posMenor + " teve menor média = " + menor)