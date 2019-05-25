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
  progress,
  setProgress,
  setIndex,
  diagrams,
  index,
  nextStep,
  prevStep,
  relations,
  setRelation,
  showError,
  finished,
  setFinished,
  showSuccess
}) {
  async function testCases() {
    const response = await Axios.put(endpoints.diagramUrl, relations)
    let finish = false
    if (response.data.correto) {
      showSuccess('Relações corretas!')
      setProgress({ usecases: true }, progress[0].id, true)
    } else {
      showError('Revise as relações atribuidas')
    }
  }
  if (progress[0].usecases && !finished) {
    setFinished(true)
  }

  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header
            title="Diagrama: Caso Uso"
            subtitle="Escolha as opções de acordo com a figura"
          />
          <Paper className={classes.main} elevation={1}>
            {finished ? (
              ''
            ) : (
              <img className={classes.diagram} alt="diagram" src={diagramImg} />
            )}
            <div className={classes.questions}>
              <>
                {finished ? (
                  <div className={classes.question}>
                    <Typography variant="h6">
                      Parabéns por finalizar o desafio!
                    </Typography>
                  </div>
                ) : (
                  <>
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
                          <></>
                        )}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </>
            </div>
            <div className={classes.control}>
              {index >= diagrams.length ? (
                <>
                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.next}
                    onClick={() => testCases()}>
                    Enviar
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    className={classes.prev}
                    onClick={() => prevStep(diagrams.length)}>
                    Voltar
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.next}
                    onClick={() => nextStep(diagrams.length)}>
                    Pronto
                  </Button>
                  {finished ? (
                    <Button
                      color="secondary"
                      variant="outlined"
                      className={classes.prev}
                      onClick={() =>
                        setProgress(
                          {
                            usecases: false
                          },
                          progress[0].id,
                          true
                        )
                      }>
                      Resetar
                    </Button>
                  ) : (
                    ''
                  )}
                </>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

DiagramsPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  finished: PropTypes.bool,
  setFinished: PropTypes.func,
  progress: PropTypes.array,
  setProgress: PropTypes.func,
  userCases: PropTypes.array, // User cases of firebase database
  diagrams: PropTypes.array,
  relations: PropTypes.array,
  fetchUseCases: PropTypes.func,
  setIndex: PropTypes.func,
  index: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  setRelation: PropTypes.func,
  showError: PropTypes.func,
  showSucess: PropTypes.func
}

export default DiagramsPage
