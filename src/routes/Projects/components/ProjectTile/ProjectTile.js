import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Button
} from '@material-ui/core'

const crescentColors = ['primary', 'secondary']

function ProjectTile({
  name,
  onSelect,
  onDelete,
  showDelete,
  classes,
  image,
  keywords
}) {
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Imagem Projeto"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.cardTitle}>
            {name}
          </Typography>
          <p className={classes.projectDescription}>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle...
          </p>

          <div>
            {keywords.map((key, index) => (
              <Chip
                key={index}
                label={key}
                color={crescentColors[index] || 1}
                className={classes.chip}
              />
            ))}
          </div>

          <div className={classes.openWrapper}>
            <Button onClick={onSelect} variant="text" color="primary">
              Abrir
            </Button>
          </div>
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
  showDelete: PropTypes.bool,
  image: PropTypes.any.isRequired,
  keywords: PropTypes.array.isRequired
}

ProjectTile.defaultProps = {
  showDelete: true
}

export default ProjectTile
