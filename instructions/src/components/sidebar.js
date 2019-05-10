import { Link } from "gatsby"
import React from "react"

const Sidebar = ({ data, isOpen, isMobile }) => {
  return (
    <div
      className={`${isOpen ? "open" : "closed"} sidebar`}
    >
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Index</Link>
          </li>
          {data.map(item => (
            <li key={item.node.frontmatter.title}>
              <Link to={item.node.fields.slug}>
                {item.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
