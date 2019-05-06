import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper, Button } from '@material-ui/core'
import Header from 'components/Header'
import MonacoEditor from 'react-monaco-editor'

function CodePage({ classes, code }) {
  const options = {
    selectOnLineNumbers: true
  }

  function editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor)
    editor.focus()
  }

  function onChange(newValue, e) {
    console.log('onChange', newValue, e)
  }

  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header title="Código" subtitle="Escreva seu código e submeta" />
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <MonacoEditor
            width="800"
            height="600"
            language="java"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={onChange}
            editorDidMount={editorDidMount}
          />
        </Grid>

        <Grid item xs={12} sm={8} lg={8}>
          <Button
            className={classes.submit}
            variant="contained"
            color="primary">
            Submeter
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

CodePage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  code: PropTypes.string
}

export default CodePage
