import View from './view.js';

class InfoView extends View {
  constructor() {
    super();
  }

  generateHTML() {
    return `
    <main
          class="w-screen min-h-screen bg-gray-50 text-gray-800 text-lg flex flex-col justify-start items-center gap-24 pt-8 drop-shadow-sm"
        >
          <div class="flex flex-row justify-center items-center gap-10">
            <div
              data-hash="adventure-map"
              class="btn__hash flex flex-col justify-center items-center absolute left-16 bg-brancoAzulado text-orange-400  hover:bg-orange-400 hover:text-gray-50 p-6 rounded-lg shadow-xl cursor-pointer"
            >
              <img src="./assets/map.png" alt="" class="drop-shadow-lg" />
              <h4
                class="font-amatic font-bold text-4xl  drop-shadow-lg"
              >
                Retornar à aventura!
              </h4>
            </div>
            <img src="./assets/rose-winds.png" alt="" class="w-[20%]" />
            <h1 class="font-bold font-amatic text-6xl text-azulEscuro">
              The Map of Me
            </h1>
          </div>
          <div
            class="flex flex-col justify-center items-center font-jakarta gap-6 w-[80%]"
          >
            <h1 class="text-2xl">
              Transtorno do Espectro Autista (<span class="text-strong">TEA</span>)
            </h1>
            <p class="text-lg">
              A partir de uma visão abrangente do quadro clínico do
              <strong class="text-strong">Transtorno do Espectro Autista</strong>,
              considera-se que o atraso de desenvolvimento cognitivo está
              relacionado a três áreas:
            </p>
          </div>
          <div class="flex flex-row justify-center gap-32 items-center">
            <ol
              class="w-[50%] flex flex-col justify-center items-center gap-4 text-2xl text-bold text-azulEscuro"
            >
              <li>Interação social</li>
              <li>Comunicação</li>
              <li>Imaginação</li>
            </ol>
            <img src="./assets/triade.png" alt="" class="w-[50%]" />
          </div>
          <div class="flex flex-row justify-evenly items-center px-16">
            <p class="w-[30%] text-justify indent-10">
              Apesar de incurável, os efeitos do atraso de desenvolvimento podem ser
              minimizados, por meio de exercícios que estimulem essas áreas mais
              afetadas. Inclusive, segundo pesquisa realizada por Chong e Putnam
              (2008), observou-se que os pais e/ou responsáveis pelas crianças com
              <strong class="text-strong">TEA</strong> buscam algum software capaz
              de interagir, justamente, com o desenvolvimento de habilidades
              sociais/comunicação, acadêmicas e organizativas/imaginativas. Conforme
              evidencia a tabela ao lado:
            </p>
            <div class="font-jakarta w-[40%]">
              <table class="w-full text-center">
                <caption class="text-2xl font-bold my-4">
                  Objetivos distribuídos por diagnósticos
                </caption>
                <thead class="w-full">
                  <tr class="">
                    <th
                      scope="col"
                      class="border border-solid border-azulClaro p-3"
                    >
                      Diagnóstico
                    </th>
                    <th
                      scope="col"
                      class="border border-solid border-azulClaro p-3"
                    >
                      Social /<br />Comunicação
                    </th>
                    <th
                      scope="col"
                      class="border border-solid border-azulClaro p-3"
                    >
                      Acadêmico
                    </th>
                    <th
                      scope="col"
                      class="border border-solid border-azulClaro p-3"
                    >
                      Organização /<br />Pensamento flexível
                    </th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr class="">
                    <th
                      scope="row"
                      class="border border-solid border-azulClaro p-3"
                    >
                      PDD-NOS
                    </th>
                    <td class="border border-solid border-azulClaro p-3">7</td>
                    <td class="border border-solid border-azulClaro p-3">12</td>
                    <td class="border border-solid border-azulClaro p-3">3</td>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="border border-solid border-azulClaro p-3"
                    >
                      Autism
                    </th>
                    <td class="border border-solid border-azulClaro p-3">15</td>
                    <td class="border border-solid border-azulClaro p-3">7</td>
                    <td class="border border-solid border-azulClaro p-3">6</td>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="border border-solid border-azulClaro p-3"
                    >
                      Aspergers
                    </th>
                    <td class="border border-solid border-azulClaro p-3">21</td>
                    <td class="border border-solid border-azulClaro p-3">9</td>
                    <td class="border border-solid border-azulClaro p-3">5</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="">
                    <th
                      scope="row"
                      class="border border-solid border-azulClaro p-3"
                    >
                      Total:
                    </th>
                    <td class="border border-solid border-azulClaro p-3">
                      <strong>43</strong>
                    </td>
                    <td class="border border-solid border-azulClaro p-3">
                      <strong>28</strong>
                    </td>
                    <td class="border border-solid border-azulClaro p-3">
                      <strong>14</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <p class="mt-4 w-full text-center">
                Adaptado de CHONG, PUTNAM, 2008.
              </p>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center w-[60%] gap-12">
            <div
              class="flex flex-row justify-center items-center w-[60%] bg-brancoAzulado p-6 gap-4 rounded-xl shadow-lg"
            >
              <div class="w-[50%] flex flex-col justify-center items-center gap-3">
                <h3 class="text-strong drop-shadow-sm">
                  Aprofunde seus conhecimentos!
                </h3>
                <h4 class="font-bold text-xl drop-shadow-md">
                  Autismo e educação:
                </h4>
                <p class="text-center drop-shadow-md">
                  Jogo digital estimulador da comunicação e da linguagem em crianças
                  autistas
                </p>
                <a
                  href="#"
                  class="bg-orange-400 text-gray-100 p-3 rounded-lg font-amatic text-3xl font-bold hover:underline w-[60%] text-center shadow-lg"
                  target="_blank"
                  >Saiba mais!</a
                >
              </div>
              <div class="w-[50%] flex flex-col justify-center items-center">
                <img
                  src="./assets/panamby.png"
                  alt=""
                  class="w-[90%] rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div class="w-[40%] text-justify indent-8">
              <p class="">
                Crianças com
                <strong class="text-strong">TEA</strong> necessitam de um ambiente
                para aprendizado que seja definido por sua
                <strong class="text-strong">regularidade</strong>,
                <strong class="text-strong">repetitividade</strong>,
                <strong class="text-strong">previsibilidade</strong> e, enfim, por
                sua <strong class="text-strong">familiaridade</strong>. Essa
                necessidade é explicada pela peculiaridade das habilidades
                sensoriais das crianças com TEA: o seu espectro
                <strong class="text-strong">visual</strong> é muito mais sucessível
                (sensível) a intervenções e estímulos.
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center w-[70%] gap-6">
            <div class="flex flex-row justify-center items-center gap-3">
              <h3 class="font-bold text-2xl text-gray-700">
                Um grande <strong class="text-strong">aliado</strong> para a
                jornada:
              </h3>
              <span class="font-amatic text-5xl font-bold text-azulEscuro"
                >The Map of Me</span
              >
            </div>
            <div class="w-full flex flex-row justify-center items-center gap-16">
              <div class="w-[40%]">
                <p class="text-justify indent-8">
                  O computador – e, mais especificamente, o jogo – se torna um
                  aliado singular para o aprendizado dessas crianças. Uma das
                  características fundamentais de um jogo é a sua
                  <strong class="text-strong">previsibilidade</strong>: seu código
                  regerá o ambiente e a experiência que será proposta ao usuário.
                  Por meio dos jogos, é possível recriar ambientes “reais” que sejam
                  <strong class="text-strong">controlados</strong>, visualmente
                  interessantes e que prendam a atenção do jogador – elementos
                  essenciais para se estabelecer uma
                  <strong class="text-strong">interação proveitosa</strong> com a
                  criança <strong class="text-strong">TEA</strong>. Além disso, o
                  aprendizado por meio de um jogo de computador elimina as
                  complexidades da interação social: a criança estabelecerá sua
                  relação com o jogo em seu
                  <strong class="text-strong">próprio ritmo</strong>.
                </p>
              </div>
              <div class="w-[60%]">
                <table class="w-full text-center">
                  <caption class="font-bold text-xl my-4">
                    Interesses de crianças com
                    <strong class="text-strong">TEA</strong
                    >, por idade
                  </caption>
                  <thead>
                    <tr>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="col"
                      >
                        Idade
                      </th>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="col"
                      >
                        Video Games
                      </th>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="col"
                      >
                        Computadores
                      </th>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="col"
                      >
                        Outros
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="row"
                      >
                        4-6 anos
                      </th>
                      <td class="border border-solid border-azulClaro p-3">0</td>
                      <td class="border border-solid border-azulClaro p-3">3</td>
                      <td class="border border-solid border-azulClaro p-3">1</td>
                    </tr>
                    <tr>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="row"
                      >
                        7-10 anos
                      </th>
                      <td class="border border-solid border-azulClaro p-3">7</td>
                      <td class="border border-solid border-azulClaro p-3">6</td>
                      <td class="border border-solid border-azulClaro p-3">0</td>
                    </tr>
                    <tr>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="row"
                      >
                        11-14 anos
                      </th>
                      <td class="border border-solid border-azulClaro p-3">7</td>
                      <td class="border border-solid border-azulClaro p-3">7</td>
                      <td class="border border-solid border-azulClaro p-3">1</td>
                    </tr>
                    <tr>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="row"
                      >
                        15-18 anos
                      </th>
                      <td class="border border-solid border-azulClaro p-3">10</td>
                      <td class="border border-solid border-azulClaro p-3">7</td>
                      <td class="border border-solid border-azulClaro p-3">0</td>
                    </tr>
                    <tr>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="row"
                      >
                        Mais de 18 anos
                      </th>
                      <td class="border border-solid border-azulClaro p-3">9</td>
                      <td class="border border-solid border-azulClaro p-3">8</td>
                      <td class="border border-solid border-azulClaro p-3">0</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        class="border border-solid border-azulClaro p-3"
                        scope="row"
                      >
                        Total
                      </th>
                      <td class="border border-solid border-azulClaro p-3">
                        <strong>33</strong>
                      </td>
                      <td class="border border-solid border-azulClaro p-3">
                        <strong>31</strong>
                      </td>
                      <td class="border border-solid border-azulClaro p-3">
                        <strong>2</strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <p class="text-center my-4">Adaptado de CHONG, PUTNAM, 2008.</p>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center w-[60%] gap-12">
            <div class="w-[60%] flex flex-col justify-center items-center gap-6">
              <div
                class="flex flex-row justify-center items-center w-full bg-brancoAzulado p-6 gap-4 rounded-xl shadow-lg"
              >
                <div
                  class="w-[50%] flex flex-col justify-center items-center gap-3"
                >
                  <h3 class="text-strong drop-shadow-sm">
                    Aprofunde seus conhecimentos!
                  </h3>
                  <h4 class="font-bold text-xl drop-shadow-md">DSM-5:</h4>
                  <p class="text-center drop-shadow-md">
                    Diagnostic and Statistical Manual of Mental Disorders
                  </p>
                  <a
                    href="#"
                    class="bg-orange-400 text-gray-100 p-3 rounded-lg font-amatic text-3xl font-bold hover:underline w-[60%] text-center shadow-lg"
                    target="_blank"
                    >Saiba mais!</a
                  >
                </div>
                <div class="w-[50%] flex flex-col justify-center items-center">
                  <img
                    src="./assets/dsm.png"
                    alt=""
                    class="w-[50%] rounded-lg shadow-lg"
                  />
                </div>
              </div>
    
              <blockquote
                class="bg-orange-400 text-gray-50 p-8 rounded-lg text-center shadow-lg"
              >
                A criança se desenvolve na medida em que percebe as coisas, explora
                os ambientes e fornece respostas para os elementos presentes nesses
                locais de vivência (RUSCHIVAL, SOUZA, 2013, p. 3).
              </blockquote>
            </div>
            <div
              class="w-[40%] text-justify indent-8 flex flex-col justify-center items-center gap-6"
            >
              <h3 class="font-bold text-xl text-gray-700">
                <em>A palavra e as <strong class="text-strong">coisas</strong></em
                >: uma relação delicada
              </h3>
              <p class="">
                Conforme evidenciado por Putnam e Chong (2008), é estimado que a
                metade das pessoas diagnosticadas com
                <strong class="text-strong">TEA</strong> tenham falhas no
                desenvolvimento da
                <strong class="text-strong">linguagem funcional</strong>, expressos
                em atrasos da verbalização das primeiras palavras ou
                <strong class="text-strong">frases comunicativas</strong>. Diante
                disso, elegemos exercitar a capacidade comunicativa de nossos
                usuários. A linguagem e a fala são os primeiros sedimentos para a
                construção das trocas e
                <strong class="text-strong">interações sociais</strong>. Por meio
                destas, a criança constrói noções básicas de
                <strong class="text-strong"
                  >relação entre as coisas que existem</strong
                >. Por exemplo: a relação que existe entre o objeto maçã e a palavra
                “maçã”. Entretanto, as crianças com autismo possuem uma restrição
                interna para a compreensão de abstrações: sua compreensão e
                pensamento se baseiam em “elementos sensoriais brutos”, sobretudo os
                <strong class="text-strong">visuais</strong>.
              </p>
            </div>
          </div>
          <div
            class="w-[80%] text-center flex flex-col justify-center items-center gap-4"
          >
            <h3 class="text-bold font-amatic text-5xl">
              Prepare-se para a
              <em class="text-strong">sua</em> Jornada...
            </h3>
            <h3 class="text-bold font-amatic text-6xl text-azulEscuro">
              DESBRAVE O MUNDO À SUA VOLTA!
            </h3>
          </div>
          <footer
            class="flex flex-row justify-center items-center bg-azulEscuro text-gray0 p-10"
          >
            <div
              class="w-[20%] flex flex-col justify-center items-center h-full pr-8"
            >
              <h3 class="text-3xl">Grupo</h3>
              <p class="font-bold text-6xl font-amatic">The Map of Me</p>
            </div>
            <div
              class="border-l border-l-gray-100 px-8 flex flex-col justify-center items-center gap-6 w-[80%]"
            >
              <h3 class="font-amatic text-4xl font-bold">
                Referências bibliográficas
              </h3>
              <ul class="flex flex-row justify-center items-center text-justify">
                <div
                  class="w-[45%] px-6 border-r border-gray-100 h-full flex flex-col justify-center items-center gap-4"
                >
                  <li class="lista_itens footercolor">
                    CHONG, Lorna; PUTNAM, Cynthia.
                    <a
                      href="http://www.lajse.org/may15/12124_Souza.pdf"
                      target="_blank"
                      rel="external"
                      class="item_link"
                      >Software and Technologies designed for with Austim:</a
                    >
                    what do users want? Conference: Proceedings of the 10th
                    International ACM SIGACCESS Conference on Computers and
                    Accessibility, out. 2008.
                  </li>
                  <li class="lista_itens footercolor">
                    CUNHA, Rafael Moreira.
                    <a
                      href="https://www.maxwell.vrac.puc-rio.br/colecao.php?strSecao=resultado&nrSeq=19646@1"
                      target="_blank"
                      rel="external"
                      class="item_link"
                      >Desenvolvimento e avaliação de um jogo de computador para
                      ensino de vocabulário para crianças com autismo.</a
                    >
                    Rio de Janeiro, 2015. Dissertação (mestrado em Informática),
                    PUC-RIO.
                  </li>
                </div>
    
                <div
                  class="w-[45%] px-6 border-r border-gray-100 h-full flex flex-col justify-center items-start gap-4"
                >
                  <li class="lista_itens footercolor">
                    <a
                      href="https://www.silvaniamariadasilva.com.br/2013/08/autismo-e-quebra-cabeca.html"
                      target="_blank"
                      rel="external"
                      class="item_link"
                      >GIL, Silvania. Autismo e quebra-cabeça.</a
                    >
                    Acesso em 01/03/2023.
                  </li>
    
                  <li class="lista_itens footercolor">
                    MACEDO, Maria.
                    <a
                      href="https://mariamacedo2013.blogspot.com/2014/06/brincar-com-quebra-cabeca-favorece-o.html"
                      target="_blank"
                      rel="external"
                      class="item_link"
                      >Brincar com quebra-cabeça favorece o desenvolvimento do
                      autista.</a
                    >
                    Acesso em 01/03/2023.
                  </li>
    
                  <li class="lista_itens footercolor">
                    RUSCHIVAL, Claudete Barbosa; SOUZA, Andriele Oliveira.
                    <a
                      href="https://scholar.google.com.br/citations?view_op=view_citation&hl=pt-BR&user=4oVoO-QAAAAJ&citation_for_view=4oVoO-QAAAAJ:u-x6o8ySG0sC"
                      target="_blank"
                      rel="external"
                      class="item_link"
                      >Autismo e educação: jogo digital estimulador da comunicação e
                      da linguagem em crianças autistas.
                    </a>
                    Latin American Journal of Science Education, 1, 12124, 2015.
                  </li>
                </div>
              </ul>
            </div>
          </footer>
        </main>
    `;
  }
}

export default new InfoView();
