import React from 'react'
import PropTypes from 'prop-types'

function StatisticsPage({ classes }) {
  return <div className={classes.root} />
}

StatisticsPage.propTypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default StatisticsPage
