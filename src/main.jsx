import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BookOpen,
  Database,
  ExternalLink,
  FilePenLine,
  FileText,
  GitBranch,
  Lightbulb,
  Presentation,
  Target,
  Workflow,
  Code2,
  ShieldCheck,
  ClipboardCheck,
  MonitorSmartphone,
  Server,
  LayoutTemplate
} from 'lucide-react'
import './styles.css'

const pi1Cards = [
  {
    icon: Workflow,
    title: 'Problematização',
    points: [
      'Escolher uma situação-problema real.',
      'Delimitar o tema e identificar as necessidades.',
      'Definir objetivos e justificar a importância da proposta.',
    ],
    tips: [
      'Escolham um problema claro e possível de resolver.',
      'Evitem temas muito amplos.',
      'Relacionem o problema com uma necessidade real da organização.',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Planejamento',
    points: [
      'Levantar requisitos funcionais e não funcionais.',
      'Organizar responsabilidades e cronograma.',
      'Registrar decisões e acompanhar a evolução do grupo.',
    ],
    tips: [
      'Dividam as tarefas entre os integrantes.',
      'Definam prazos para cada etapa.',
      'Registrem alterações e decisões importantes.',
    ],
  },
  {
  icon: Database,
  title: 'Desenvolvimento do Banco de Dados',
  points: [
    'Elaborar os modelos conceitual, lógico e físico do banco de dados.',
    'Implementar tabelas, atributos, chaves primárias, chaves estrangeiras e relacionamentos.',
    'Aplicar regras de negócio, restrições e validações para garantir a integridade dos dados.',
    'Inserir dados de teste e executar consultas SQL para validar o funcionamento da estrutura criada.',
  ],
  tips: [
    'Façam a modelagem antes de iniciar a implementação.',
    'Padronizem os nomes das tabelas, colunas e relacionamentos.',
    'Validem corretamente as cardinalidades e as dependências entre as entidades.',
    'Evitem dados duplicados e estruturas que possam gerar inconsistências.',
    'Testem operações de cadastro, consulta, atualização e exclusão.',
    'Documentem o banco e mantenham os scripts SQL organizados e versionados.',
  ],
},{
  icon: LayoutTemplate,
  title: 'Protótipo',
  points: [
    'Criar protótipos das principais interfaces do sistema utilizando Figma ou Canva.',
    'Demonstrar a organização visual, a navegação e a experiência do usuário.',
    'Apresentar telas coerentes com as funcionalidades previstas no projeto.',
    'Planejar e comunicar visualmente o design da aplicação antes da implementação.',
  ],
  tips: [
    'Criem as principais telas antes de iniciar a programação.',
    'Mantenham cores, fontes, botões e componentes padronizados.',
    'Organizem uma sequência lógica de navegação entre as telas.',
    'Incluam telas como login, cadastro, página inicial, listagens, formulários e detalhes.',
    'Como a UC16 ainda não foi cursada, priorizem clareza, organização e coerência visual.',
  ],
},
  {
    icon: FileText,
    title: 'Artigo Científico',
    points: [
      'Produzir um artigo científico descrevendo o problema, a metodologia, o desenvolvimento e os resultados do projeto.',
      'Seguir o modelo disponibilizado pela professora, respeitando a estrutura e a formatação.',
      'Apresentar escrita clara, objetiva, com referências bibliográficas e linguagem acadêmica.',
    ],
    tips: [
      'Escrevam o artigo desde o início do projeto.',
      'Utilizem referências confiáveis.',
      'Descrevam apenas aquilo que foi realmente desenvolvido.',
      'Revisem ortografia, gramática e formatação.',
      'Todos os integrantes devem participar da elaboração do artigo.',
    ],
  },
  {
    icon: Presentation,
    title: 'Apresentação do Projeto',
    points: [
      'Apresentar claramente o problema identificado e a solução proposta.',
      'Explicar a modelagem e a estrutura do banco de dados.',
      'Demonstrar o banco funcionando, incluindo tabelas, relacionamentos e consultas.',
      'Apresentar os principais resultados, dificuldades e aprendizagens.',
    ],
    tips: [
      'Organizem uma apresentação curta, clara e objetiva.',
      'Todos os integrantes devem participar.',
      'Evitem ler integralmente os slides.',
      'Preparem exemplos de consultas e dados para demonstração.',
      'Treinem a apresentação antes da banca.',
    ],
  },
]

const pi1Tips = [
  'Escolham um problema relevante, claro e possível de concluir no período.',
  'Façam a modelagem antes de iniciar a implementação.',
  'Definam corretamente as regras de negócio e os relacionamentos.',
  'Evitem tabelas gigantes e dados repetidos.',
  'Testem todas as consultas e façam backups frequentes.',
  'Dividam as tarefas e mantenham todos os integrantes envolvidos.',
  'Documentem as decisões desde o início do projeto.',
  'Preparem a apresentação com antecedência.',
]

const criterios = [
  {
    icon: Database,
    title: '1. Banco de Dados',
    points: [
      'Apresentar um banco de dados funcional e integrado ao sistema.',
      'Utilizar uma modelagem elaborada, representando múltiplos aspectos da aplicação.',
      'Garantir consistência, integridade e organização dos dados.',
      'Implementar corretamente tabelas, relacionamentos, chaves e restrições.',
    ],
    tips: [
      'Não deixem o banco para o final.',
      'Validem chaves, relacionamentos e regras de negócio.',
      'Utilizem dados de teste próximos de situações reais.',
      'Verifiquem se as operações de cadastro, atualização, consulta e exclusão funcionam.',
    ],
  },
  {
    icon: Server,
    title: '2. Projeto Full Stack Rodando',
    points: [
      'Desenvolver uma aplicação Full Stack integrando Front-end, Back-end e Banco de Dados.',
      'Garantir a comunicação correta entre interface, API, servidor e banco de dados.',
      'Apresentar as principais funcionalidades totalmente implementadas.',
      'Demonstrar autenticação, persistência dos dados, validações e tratamento de erros quando aplicável.',
      'Executar o projeto durante a banca sem depender de funcionalidades simuladas.',
    ],
    tips: [
      'Testem o projeto completo antes da apresentação.',
      'Preparem o banco de dados com informações para demonstração.',
      'Verifiquem rotas, endpoints, variáveis de ambiente e conexão com o banco.',
      'Evitem apresentar telas sem funcionamento real.',
      'Tenham um plano B caso ocorram problemas de internet ou configuração.',
    ],
  },
  {
    icon: Code2,
    title: '3. Código e Interface em Inglês',
    points: [
      'Todo o código-fonte deve estar em inglês.',
      'Textos, botões, campos e mensagens da interface também devem estar em inglês.',
      'Variáveis, funções, componentes, rotas, entidades e tabelas devem seguir uma nomenclatura padronizada.',
      'A padronização aproxima o projeto das práticas do mercado internacional.',
    ],
    tips: [
      'Usem nomes como LoginScreen, Customer, Order e SaveButton.',
      'Padronizem variáveis, componentes, rotas, API e banco de dados.',
      'Evitem misturar português e inglês no mesmo projeto.',
      'Utilizem nomes claros e relacionados à função de cada elemento.',
    ],
  },
  {
    icon: GitBranch,
    title: '4. Versionamento',
    points: [
      'Utilizar GitHub ou GitLab durante todo o desenvolvimento.',
      'Registrar alterações com commits claros e frequentes.',
      'Garantir colaboração, rastreabilidade e segurança do código-fonte.',
      'Manter um repositório organizado e atualizado.',
    ],
    tips: [
      'Façam commits pequenos e descritivos.',
      'Não enviem todo o projeto apenas no último dia.',
      'Utilizem branches quando possível.',
      'Mantenham o README atualizado.',
      'Não publiquem senhas ou credenciais no repositório.',
    ],
  },
  {
    icon: FileText,
    title: '5. Artigo Científico',
    points: [
      'Finalizar um artigo científico descrevendo o problema, os objetivos, a metodologia, o desenvolvimento e os resultados.',
      'Seguir o modelo disponibilizado pela professora.',
      'Apresentar referências bibliográficas adequadas e linguagem acadêmica.',
      'Relacionar o conteúdo do artigo com o sistema efetivamente desenvolvido.',
      'Apresentar conclusões coerentes com os resultados obtidos.',
    ],
    tips: [
      'Escrevam o artigo ao longo do projeto.',
      'Documentem as decisões técnicas e as tecnologias utilizadas.',
      'Não incluam funcionalidades que não foram implementadas.',
      'Revisem ortografia, formatação, citações e referências.',
      'Todos os integrantes devem participar da elaboração e revisão.',
    ],
  },
  {
    icon: Presentation,
    title: '6. Apresentação Profissional',
    points: [
      'Apresentar o problema, a solução e os resultados de forma clara e objetiva.',
      'Demonstrar o sistema Full Stack funcionando durante a banca.',
      'Explicar as tecnologias utilizadas e a arquitetura da aplicação.',
      'Evidenciar a participação e a contribuição de todos os integrantes.',
      'Utilizar uma apresentação visual organizada, profissional e conectada ao segmento de tecnologia.',
    ],
    tips: [
      'Treinem a apresentação diversas vezes.',
      'Evitem ler integralmente os slides.',
      'Distribuam as falas entre os integrantes.',
      'Preparem uma sequência organizada para demonstrar o sistema.',
      'Testem computadores, conexão, servidor e banco antes da banca.',
      'Levem imagens ou um vídeo da aplicação como plano B.',
    ],
  },
]

const generalTips = [
  'Definam as tarefas da equipe logo no início.',
  'Façam reuniões curtas para acompanhar o andamento.',
  'Utilizem o GitHub desde o primeiro dia.',
  'Testem Front-end, Back-end e Banco de Dados continuamente.',
  'Documentem decisões e mudanças importantes.',
  'Finalizem o artigo científico antes dos últimos dias.',
  'Preparem a apresentação com antecedência.',
  'Ensaiem a demonstração e tenham um plano B para problemas técnicos.',
]

const artigos = [
  {
    title:
      'SKATE FOR ALL: Inovação Tecnológica e Integração Multidisciplinar para Democratização do Esporte',
    url: 'https://www.even3.com.br/anais/congresso-brasileiro-interdisciplinar-ciencia-tecnologia/1238098-skate-for-all--inovacao-tecnologica-e-integracao-multidisciplinar-para-democratizacao-do-esporte/',
  },
  {
    title:
      'HydroRS: Conectando Ciência e Tecnologia na Prevenção de Riscos Hidrológicos',
    url: 'https://drive.google.com/file/d/16Vvtx5G6yBtl8SUd_f3g2J_uG9TSdjI_/view?usp=sharing',
  },
  {
    title:
      'Tecnologia como Espaço de Acolhimento: uma plataforma digital para apoio ao neurodesenvolvimento',
    url: 'https://zenodo.org/records/19208067',
  },
  {
    title:
      'Atlas Mundi: uma plataforma digital interativa para o ensino de Geografia',
    url: 'https://zenodo.org/records/19207654',
  },

   {
    title:
      'Atlas Mundi: uma plataforma digital interativa para o ensino de Geografia',
    url: 'https://zenodo.org/records/19207654',
  },
]

const apresentacoes = [
  {
    title:
      'HydroRS: Conectando Ciência e Tecnologia na Prevenção de Riscos Hidrológicos',
    url: 'https://drive.google.com/file/d/13r1ym5cGaJVpbur1rz-XlUp6yOdIRYJQ/view?usp=sharing',
  },
  {
    title: 'TERRAFAR',
    url: 'https://https://drive.google.com/file/d/1UeJxLPPeMAifCJJxZm6wBkrdwAeMNgzl/view?usp=sharing.link/wk2chgi9pque4tr',
  },
  {
    title: 'SKATE FOR ALL',
    url: 'https://www.canva.com/design/DAGq5X1LrKo/2jPHuOdeOm4_atkQIaOkFg/edit?utm_content=DAGq5X1LrKo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
]

function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Pi1Card({ item }) {
  const Icon = item.icon

  return (
    <article className="info-card pi1-card">
      <div className="card-icon">
        <Icon size={24} />
      </div>

      <h3>{item.title}</h3>

      <BulletList items={item.points} />

      {item.tips?.length > 0 && (
        <div className="tips-box">
          <div className="tips-title">
            <Lightbulb size={19} />
            <strong>Dicas</strong>
          </div>

          <BulletList items={item.tips} />
        </div>
      )}
    </article>
  )
}

function CriteriaCard({ item }) {
  const Icon = item.icon

  return (
    <article className="criteria-card">
      <div className="criteria-heading">
        <div className="card-icon">
          <Icon size={24} />
        </div>

        <h3>{item.title}</h3>
      </div>

      <BulletList items={item.points} />

      <div className="tips-box">
        <div className="tips-title">
          <Lightbulb size={19} />
          <strong>Dicas</strong>
        </div>

        <BulletList items={item.tips} />
      </div>
    </article>
  )
}

function ResourceLink({ item, presentation = false }) {
  const Icon = presentation ? Presentation : FileText

  return (
    <a
      className="resource-link"
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={22} />
      <span>{item.title}</span>
      <ExternalLink size={18} />
    </a>
  )
}

function App() {
  return (
    <div>
      <header className="hero">
        <div className="wrap">
          <span className="tag">Projeto Integrador</span>

          <h1>Orientações do Projeto Integrador</h1>

          <p>
            Conteúdos, critérios, dicas e recursos para o PI 1 e o PI 2.
          </p>

          
        </div>
        
      </header>

      <main className="wrap main">
        <section className="welcome">
          <BookOpen size={35} />

          <div>
            <h2>Olá, queridos alunos ✌😉!</h2>

            <p>
              A seguir estão alguns recursos para o PI e os critérios oficiais
              que orientarão o desenvolvimento do trabalho e a banca.

              Link Metodologia Científica: https://canva.link/busl07wvge2alzq
            </p>
          </div>
        </section>

        <section className="pi-section pi1-section">
          <div className="section-banner pi1-banner">
            <span className="section-number">PI 1</span>

            <div>
              <small>PROJETO INTEGRADOR 1</small>

              <h2>Arquitetura e implantação de banco de dados</h2>

              <p>
                Foco na problematização, levantamento de requisitos, modelagem,
                implementação, artigo científico e apresentação do banco de
                dados.
              </p>
            </div>
          </div>

          <div className="content-padding">
            <div className="section-title">
              <Target />

              <div>
                <span>Objetivo</span>
                <h2>Construir uma proposta sólida e bem planejada</h2>
              </div>
            </div>

            <p className="intro-text">
              O grupo deverá identificar uma situação-problema e desenvolver a
              arquitetura de um banco de dados para uma organização real,
              aplicando técnicas de levantamento de requisitos, modelagem,
              implementação, documentação e apresentação.
            </p>

            <div className="grid">
              {pi1Cards.map((item) => (
                <Pi1Card item={item} key={item.title} />
              ))}
            </div>

            <div className="tips-panel pi1-tips">
              <div className="tips-panel-title">
                <Lightbulb />

                <div>
                  <span>Dicas para o PI 1</span>
                  <h3>Cuidados importantes durante o desenvolvimento</h3>
                </div>
              </div>

              <BulletList items={pi1Tips} />
            </div>
          </div>
        </section>

        <div className="major-divider">
          <span>Agora começa uma nova etapa</span>
          <strong>PROJETO INTEGRADOR 2</strong>
        </div>

        <section className="pi-section pi2-section">
          <div className="section-banner pi2-banner">
            <span className="section-number">PI 2</span>

            <div>
              <small>PROJETO INTEGRADOR 2</small>

              <h2>Desenvolvimento de um software comercial</h2>

              <p>
                Foco em projeto Full Stack funcionando, arquitetura
                cliente-servidor, qualidade técnica, documentação e
                apresentação profissional.
              </p>
            </div>
          </div>

          <div className="content-padding">
            <div className="section-title">
              <ShieldCheck />

              <div>
                <span>Critérios oficiais</span>
                <h2>Critérios de avaliação — Projeto Integrador 2</h2>
              </div>
            </div>

            <div className="criteria-grid">
              {criterios.map((item) => (
                <CriteriaCard item={item} key={item.title} />
              ))}
            </div>

            <section className="objective">
              <h2>Objetivo do Projeto Integrador 2</h2>

              <p>
                Esses critérios são fundamentais para preparar vocês para
                desafios reais do mercado de desenvolvimento de sistemas. O
                foco agora é na organização, documentação técnica,
                escalabilidade e funcionalidade da solução.
              </p>

              <p className="objective-highlight">
                Ao final do curso, cada grupo deverá apresentar um sistema Full
                Stack completo, bem estruturado e funcionando, acompanhado de
                artigo científico, versionamento adequado e apresentação
                profissional.
              </p>
            </section>

            <div className="tips-panel pi2-tips">
              <div className="tips-panel-title">
                <Lightbulb />

                <div>
                  <span>Orientações e dicas gerais</span>
                  <h3>Pontos que fazem diferença na banca</h3>
                </div>
              </div>

              <BulletList items={generalTips} />
            </div>

            <section className="resources-section">
              <div className="section-title">
                <FileText />

                <div>
                  <span>Recursos</span>
                  <h2>Modelos de artigos</h2>
                </div>
              </div>

              <div className="resource-list">
                {artigos.map((item) => (
                  <ResourceLink item={item} key={item.title} />
                ))}
              </div>
            </section>

            <section className="editable-box">
              <div className="editable-icon">
                <FilePenLine size={28} />
              </div>

              <div>
                <span className="eyebrow">Modelo editável</span>
                <h2>Documento para elaboração do artigo</h2>
                <p>
                  Utilize este arquivo como base para organizar e editar o
                  trabalho do grupo. ⚠ Baixe este arquivo para editar!
                </p>
              </div>

              <a
                className="button"
                href="https://senacrs365-my.sharepoint.com/:w:/g/personal/dalribeiro_senacrs_com_br/IQBCDQH8KsWUTrIAWeAnYI4AAVFF4D0p4QlxZQFHjkJeptk?e=g9HLWA"
                target="_blank"
                rel="noreferrer"
              >
                Abrir documento
                <ExternalLink size={18} />
              </a>
            </section>

            <section className="resources-section">
              <div className="section-title">
                <Presentation />

                <div>
                  <span>Recursos</span>
                  <h2>Modelos de apresentação</h2>
                </div>
              </div>

              <div className="resource-list">
                {apresentacoes.map((item) => (
                  <ResourceLink
                    item={item}
                    presentation
                    key={item.title}
                  />
                ))}
              </div>
            </section>

            <section className="final">
              <MonitorSmartphone size={31} />

              <div>
                <h2>Orientação para a apresentação </h2>

                <BulletList
                  items={[
                    'Apresentem claramente o problema e a solução proposta. 👩‍🏫',
                    'Todos os integrantes devem saber do projeto.🙅‍♀️🙅‍♂️',
                    'Expliquem as tecnologias utilizadas e a arquitetura Full Stack. 🧩',
                    'Demonstrem o Front-end, o Back-end e o Banco de Dados funcionando. 👩‍💻👨‍💻',
                    'Apresentem as principais funcionalidades sem erros. ✅',
                    'Destaquem os resultados e as principais aprendizagens. ⚡',
                    'Preparem uma apresentação objetiva, criativa e conectada ao segmento profissional. 👨‍💼👩‍💼',
                    'Distribuam as falas entre todos os integrantes. 🙋‍♀️🙋‍♂️',
                    'Treinem e preparem um plano B para problemas técnicos. 🤹‍♀️🤹‍♂️',
                  ]}
                />
              </div>
            </section>
          </div>
        </section>

        <p className="signature">
          Atenciosamente,
          <br />
          <strong>Prof. Dalvana</strong>
        </p>
      </main>

      <footer>
        Projeto Integrador • Tecnologia — SENAC São Leopoldo
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
