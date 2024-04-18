function realParaOutraMoeda(valorReal, taxaDeCambio) {
    return valorReal * taxaDeCambio;
}

function outraMoedaParaReal(valorOutraMoeda, taxaDeCambio) {
    return valorOutraMoeda / taxaDeCambio;
}

const passagemParaNovaZelandia = 13996;
const diariaHotelNovaZelandia = 79.15;
const guiaLocalNovaZelandia = 200;

const passagemParaTailandia = 9160;
const diariaHotelTailandia = 590;
const guiaLocalTailandia = 235;

const passagemParaCostaRica = 5119;
const diariaHotelCostaRica = 2300;
const guiaLocalCostaRica = 3150;

const taxaRealParaDolarNeozelandes = 3.25;
const taxaRealParaBahtTailandes = 0.15;
const taxaRealParaColonCostarriquenho = 0.0089;

console.log("Valores convertidos para Dólar Neozelandês:");
console.log("Passagens aéreas:", realParaOutraMoeda(passagemParaNovaZelandia, taxaRealParaDolarNeozelandes));
console.log("Diária hotel:", realParaOutraMoeda(diariaHotelNovaZelandia, taxaRealParaDolarNeozelandes));
console.log("Guia local:", realParaOutraMoeda(guiaLocalNovaZelandia, taxaRealParaDolarNeozelandes));

console.log("\nValores convertidos para Baht Tailandês:");
console.log("Passagens aéreas:", realParaOutraMoeda(passagemParaTailandia, taxaRealParaBahtTailandes));
console.log("Diária hotel:", realParaOutraMoeda(diariaHotelTailandia, taxaRealParaBahtTailandes));
console.log("Guia local:", realParaOutraMoeda(guiaLocalTailandia, taxaRealParaBahtTailandes));

console.log("\nValores convertidos para Colón Costarriquenho:");
console.log("Passagens aéreas:", realParaOutraMoeda(passagemParaCostaRica, taxaRealParaColonCostarriquenho));
console.log("Diária hotel:", realParaOutraMoeda(diariaHotelCostaRica, taxaRealParaColonCostarriquenho));
console.log("Guia local:", realParaOutraMoeda(guiaLocalCostaRica, taxaRealParaColonCostarriquenho));
