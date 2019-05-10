import React from "react"
import Code from "../images/svg/Code.inline.svg"

const Footer = () => (
  <footer>
    <div className="code-wrapper ">
      <Code />
    </div>
    <div className="flex-column address">
      <span>+358 40 729 2733</span>
      <span>Vuorikatu 14 A</span>
      <span>00100 Helsinki</span>
    </div>
    <div className="flex-column links">
      <a className="footer-link" href="https://codento.fi/privacy-policy/">
        Tietosuojakäytännöt
      </a>
      <a className="footer-link" href="https://codento.fi/teeta-ohjelmisto/">
        Teetä ohjelmisto
      </a>
      <a className="footer-link" href="https://codento.fi/paranna-tyotapasi/">
        Paranna työtapaasi
      </a>
      <a
        className="footer-link"
        href="https://codento.fi/tehosta-it-arkkitehtuuriasi/"
      >
        IT-arkkitehtuurit
      </a>
      <a className="footer-link" href="https://www2.codento.fi/blogi">
        Blogi
      </a>
      <a className="footer-link" href="https://codento.fi/rekry">
        Avoimet työpaikat
      </a>
    </div>
  </footer>
)

export default Footer
