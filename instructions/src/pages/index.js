import React from "react"
import CodentoH1 from "../components/codento-h1"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Codenton React-alkeet" keywords={[`documentation`, `application`, `react`]} />
    <CodentoH1 title="Codenton React-alkeet" />
    <p><b>Materiaalit ja koodit:</b> Olli Warro, Eevis Panula, Esko Niiranen, Samu Vuorinen, Ilari Nieminen ja Saara-Maija Pakarinen. </p>
    <h2>#Kettugether</h2>
    <ul>
      <li>Artful participation – “Is my behavior in this moment the greatest contribution I can make to the effectiveness of this collaboration?”</li>
      <li>Kunnioittava kohtaaminen — kunnioitetaan toistemme emotionaalisia ja fyysisiä rajoja!</li>
      <li>Ei ole tyhmiä kysymyksiä!</li>
    </ul>
    <h2>Ennakkotehtävät</h2>
    <ul>
      <li>Asenna koneellesi: 
        <ul>
          <li><a href="https://nodejs.org/">node</a></li>
          <li><a href="https://code.visualstudio.com/">VSCode</a> tai <a href="https://atom.io/">Atom</a>, tai käytä omaa lempieditoriasi</li>
          <li>Jos käytät Windowsia, suosittelemme <a href="https://git-scm.com/">Gitin</a> asentamista</li>
        </ul>
      </li>
    </ul>
    <h2>Huomioita materiaalista</h2>
    <p>Workshopin aikana rakennamme toimivan sovelluksen Reactilla. Käydessäsi materiaalia läpi, tulet törmäämään tehtäviin, jotka tulee tehdä järjestyksessä. Workshopin aihealue on laaja ja vastaan voi tulla paljon uutta, joten ei ole syytä huoleen, vaikkei pääsisikään loppuun asti. Tehtäviä voi halutessaan jatkaa esimerkiksi kotona, ja apua saa Slackista workshopin jälkeenkin.</p>
    <p>Aloitetaan! <a href="/web-kertaus/">Kerrataan ensin hieman web-sivujen perusteita.</a></p>
  </Layout>
)

export default IndexPage
