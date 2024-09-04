const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    {
    enunciado: "O aquecimento global é uma causa do desmatamento. Com base nessa tragédia, as atitudes humanas como queimadas e a derrubadas de matas seria importante para a prevenção",
    alternativas: [
    { 
 texto:"Sim, com base nisso iria mudar a saúde do planeta terra",
 afirmacao: "visão de um futuro saudável para suas gerações"
    }
    {
 texto:"Não, pois são necessário o desmatamento para aumentar as cidades",
 afirmacao: "pessoa com visão de investimentos na sociedade"
    }
]
    },
    {
        enunciado: "Qual a principal perca do desmatamento",
        alternativas: [
            {
    texto: "Biodiversidade, fauna, flora",
    afirmacao: "estudos em pesquisas indicam isso"
            }
            {
    texto:"Perca de árvores frutíferas e raras",
    afirmacao: "uma opinião de uma pessoa rural ou cultural que gosta da natureza"
            }
    ]
        },
        {
            enunciado: "É possivel recuperar o aquecimento global de qual forma",
            alternativas: [
                {
       texto: "Gerar fontes de energia sustentável como eólica e solar",
       afirmacao: "segundo pesquisas as energias sustentáveis podem ajudar"
                }
                {
        texto:"Não é possivel recuperar de nenhuma forma",
        afirmacao: "não tem estudo suficiente sobre o assunto"
                }
        ]
            },
   ];

   let atual = 0;
   let perguntaAtual;
   let historiaFinal = "";
   
   function mostraPergunta() {
       if (atual >= perguntas.length) {
           mostraResultado();
           return;
       }
       perguntaAtual = perguntas[atual];
       caixaPerguntas.textContent = perguntaAtual.enunciado;
       caixaAlternativas.textContent = "";
       mostraAlternativas();
   }
   
   function mostraAlternativas(){
       for(const alternativa of perguntaAtual.alternativas) {
           const botaoAlternativas = document.createElement("button");
           botaoAlternativas.textContent = alternativa.texto;
           botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAlternativas.appendChild(botaoAlternativas);
       }
   }
   
   function respostaSelecionada(opcaoSelecionada) {
       const afirmacoes = opcaoSelecionada.afirmacao;
       historiaFinal += afirmacoes + " ";
       atual++;
       mostraPergunta();
   }
   
   function mostraResultado() {
       caixaPerguntas.textContent = "Em 2049...";
       textoResultado.textContent = historiaFinal;
       caixaAlternativas.textContent = "";
   }
   
   mostraPergunta();