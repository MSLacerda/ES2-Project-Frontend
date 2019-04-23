import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import { Card, CardMedia, CardContent } from '@material-ui/core';

function ProjectTile({ name, onSelect, onDelete, showDelete, classes }) {
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/project-planning.jpg"
        title="Imagem Projeto"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>

        </CardContent>
      </div>
    </Card>
  )
}

ProjectTile.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  name: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
}

ProjectTile.defaultProps = {
  showDelete: true
}

export default ProjectTile
