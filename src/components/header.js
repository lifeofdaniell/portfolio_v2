import React from "react"
import PropTypes from "prop-types"
import NavBar from "./navbar"
import MobileNavMenu from "./MobileNav"

const HeaderPage = ({ siteTitle }) => {
  return (
    <div>
      <MobileNavMenu />
      <NavBar />
    </div>
  )
}
HeaderPage.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPage.defaultProps = {
  siteTitle: ``,
}

export default HeaderPage
