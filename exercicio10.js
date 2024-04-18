var nome_cliente, destino, valor_passagem, diaria_hotel, valor_guia, custo_fixo, valor_total;

nome_cliente = "joao";
destino = "Japao";
dias = 7;
valor_passgem = 10.000;
diaria_hotel = 100;
valor_guia = 200;
custo_fixo = 30;

valor_total = parseInt(valor_passgem + diaria_hotel*dias + valor_guia + custo_fixo)


texto = //o e-mail automático a ser enviado deve ser algo parecido com:
`Olá, ${nome_cliente}! É um prazer termos você como cliente e estamos ansiosos para que sua viagem para ${destino} possa ocorrer em breve!
Estou te encaminhando os custos:
As passagens ficarão em torno de R$ ${valor_passagem}, os custos para a acomodação de ${dias} dias serão de R$ ${diaria_hotel*dias}. 
O guia local custará R$ ${valor_guia}.
Sua viagem custará R$ ${valor_total}!`

console.log(texto)