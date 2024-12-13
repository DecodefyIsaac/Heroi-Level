let nomeHeroi = "Artorias"
let levelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante", ]

for(xpDoHeroi = 1000; xpDoHeroi < 2000; xpDoHeroi+= 500){
    console.log(nomeHeroi + " derrotou o Dragão e ganhou " + xpDoHeroi + " de experiência")

   if(xpDoHeroi > 1 && xpDoHeroi < 1000)
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[0])

   else if(xpDoHeroi === 1001 || xpDoHeroi <= 2000 )
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[1])

   else if(xpDoHeroi === 2001 || xpDoHeroi <= 5000 )
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[2])

   else if(xpDoHeroi === 5001 || xpDoHeroi <= 7000 )
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[3])

   else if(xpDoHeroi === 7001 || xpDoHeroi <= 8000 )
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[4])

   else if(xpDoHeroi === 8001 || xpDoHeroi <= 9000 )
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[5])

   else if(xpDoHeroi === 9001 || xpDoHeroi <= 10000 )
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[6])

   else if(xpDoHeroi > 10001 )
    console.log("O Herói " + nomeHeroi + " agora é Level " + levelHeroi[7])

}


   