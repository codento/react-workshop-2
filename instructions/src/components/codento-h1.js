import React from "react"
import PropTypes from "prop-types"

const CodentoH1 = ({ title }) => (
  <div className="heading">
    <h1>{title}</h1>
    <div className="underline" />
  </div>
)

CodentoH1.propTypes = {
  title: PropTypes.string,
}

export default CodentoH1
