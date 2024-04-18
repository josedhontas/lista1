var idade = prompt("Digite sua idade:")
idade = parseInt(idade);

if(idade >= 16 && idade <= 17){
    console.log("Voce pode votar, mas nao é obrigatorio")
}

else if(idade >= 18 && idade <= 70){
    console.log("Voce é obrigado a votar")
}
else if(idade > 70){
    console.log("Voce pode votar, mas nao é obrigatorio")
}

else{
    console.log("Voce nao pode votar")
}