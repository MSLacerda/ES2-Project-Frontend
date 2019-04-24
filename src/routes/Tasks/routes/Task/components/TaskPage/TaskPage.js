import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function TaskPage({ task, taskId, classes }) {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} component="h2">
            {task.name || 'task'}
          </Typography>
          <Typography className={classes.subtitle}>{taskId}</Typography>
          <div style={{ marginTop: '10rem' }}>
            <pre>{JSON.stringify(task, null, 2)}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

TaskPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  // task: PropTypes.object.isRequired, // from enhancer (connect)
  taskId: PropTypes.string.isRequired // from enhancer (withProps)
}

export default TaskPage
