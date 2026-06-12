const nao = document.getElementById("nao");
const sim = document.getElementById("sim");

let position = 0;
let isAnimating = false;

nao.addEventListener("mouseover", animateNao);
nao.addEventListener("click", animateNao);

function animateNao() {
  if (!isAnimating) {
    isAnimating = true;
    position = position === 0 ? 150 : 0;
    nao.style.transform = `translate(0px , ${position}px)`;
    nao.style.transition = "all 0.2s ease";

    setTimeout(function () {
      isAnimating = false;
    }, 200);
  }
}

sim.addEventListener("click", function () {
  // Substitua pelo seu número (Exemplo: "5511999999999")
  const seuNumero = "5511992635413";

  // Texto limpo
  const texto = "Aceito o convite! ";

  // Gera os emojis direto na memória do navegador
  const coracao = String.fromCodePoint(0x2728);
  const dancarinaEscura = String.fromCodePoint(0x1f483);

  // Junta o texto com os emojis
  const mensagemCompleta = texto + coracao + dancarinaEscura;

  // Codifica para o formato de URL
  const mensagemCodificada = encodeURIComponent(mensagemCompleta);

  // MUDANÇA AQUI: Usando a API oficial que o aplicativo do WhatsApp aceita melhor
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${seuNumero}&text=${mensagemCodificada}`;

  // Abre o WhatsApp
  window.open(urlWhatsapp, "_blank");
});
