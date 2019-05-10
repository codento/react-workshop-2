import React from "react"
import Cettugether from "../images/svg/Cettugether.inline.svg"
import Code from "../images/svg/Code.inline.svg"
import PropTypes from "prop-types"
import { MdMenu } from "react-icons/md"

const Header = ({ shrink, isOpen, toggleMenu, isMobile }) => (
  <div>
    <header className={shrink ? "shrink-header" : ""}>
      <div className={`cettugether-wrapper ${shrink ? "shrink-button" : ""}`}>
        <Cettugether />
        <Code />
      </div>
      {isMobile && (
        <div className="button-container">
          <button
            aria-label="menu-button"
            className={`menu-button ${isOpen ? "open" : ""}`}
            onClick={() => toggleMenu(!isOpen)}
          >
            <MdMenu />
          </button>
        </div>
      )}
    </header>
  </div>
)

Header.propTypes = {
  shrink: PropTypes.bool,
  toggleMenu: PropTypes.func,
  isMobile: PropTypes.bool,
  isOpen: PropTypes.bool,
}

export default Header
