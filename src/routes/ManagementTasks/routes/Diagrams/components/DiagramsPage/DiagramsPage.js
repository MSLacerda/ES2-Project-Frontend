import React from 'react'
import PropTypes, { func } from 'prop-types'
import Typography from '@material-ui/core/Typography'
import {
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@material-ui/core'
import Header from 'components/Header'
import diagramImg from 'static/images/diagrams/usecase.png'
import Axios from 'axios'
import endpoints from 'constants/api'

function Options({ id, classes, values, setRelation, relations }) {
  function handleChange(event) {
    const userId = parseInt(event.target.value)
    setRelation(id, userId)
  }

  function isChecked() {
    const test = relations.filter(el => el.codigo === id)

    if (test[0]) return test[0].codigo_usuario.toString()
    return ''
  }

  return (
    <RadioGroup
      aria-label="Opção"
      name="opcao"
      className={classes.group}
      onChange={handleChange}
      value={isChecked()}>
      {values.map((item, index) => (
        <FormControlLabel
          key={index}
          value={`${item.codigo}`}
          control={<Radio />}
          checked={isChecked()}
          label={item.conteudo}
        />
      ))}
    </RadioGroup>
  )
}

function DiagramsPage({
  classes,
  diagrams,
  index,
  nextStep,
  prevStep,
  relations,
  setRelation,
  showError,
  showSucess
}) {
  async function testCases() {
    const response = await Axios.put(endpoints.diagramUrl, relations)

    if (response.data.correct) {
      showSucess('Relações corretas!')
    } else {
      showError('Revise as relações atribuidas')
    }
  }

  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header
            title="Digrama: Caso Uso"
            subtitle="Escolha as opções de acordo com a figura"
          />
          <Paper className={classes.main} elevation={1}>
            <img className={classes.diagram} alt="diagram" src={diagramImg} />
            <div className={classes.questions}>
              {diagrams.map((item, i) => (
                <React.Fragment key={i}>
                  {i === index ? (
                    <div className={classes.question} key={i}>
                      <Typography variant="h6">
                        Qual das opções abaixo melhor se encaixa na figura
                        <b> {++i} </b>
                      </Typography>
                      <Options
                        id={item.codigo}
                        classes={classes}
                        values={diagrams}
                        setRelation={setRelation}
                        relations={relations}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className={classes.control}>
              {index >= diagrams.length ? (
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.next}
                  onClick={() => testCases()}>
                  Enviar
                </Button>
              ) : (
                <>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.next}
                    onClick={() => nextStep(diagrams.length)}>
                    Pronto
                  </Button>
                </>
              )}
              <Button
                color="secondary"
                variant="outlined"
                className={classes.prev}
                onClick={() => prevStep(diagrams.length)}>
                Voltar
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

DiagramsPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  userCases: PropTypes.array, // User cases of firebase database
  diagrams: PropTypes.array,
  relations: PropTypes.array,
  fetchUseCases: PropTypes.func,
  index: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  setRelation: PropTypes.func,
  showError: PropTypes.func,
  showSucess: PropTypes.func
}

export default DiagramsPage
