import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import ProjectRoute from 'routes/Projects/routes/Project'
import ProjectTile from '../ProjectTile'
import NewProjectTile from '../NewProjectTile'
import NewProjectDialog from '../NewProjectDialog'
import { renderChildren } from 'utils/router'
import projectImage from 'static/images/cards/project-planning.jpg'
import devImage from 'static/images/cards/source-code.jpg'
import { Grid, Typography } from '@material-ui/core'
import Header from 'components/Header'

function ProjectsPage({
  projects,
  collabProjects,
  auth,
  newDialogOpen,
  toggleDialog,
  deleteProject,
  addProject,
  classes,
  match,
  goToTasks
}) {
  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([ProjectRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <div className={classes.root}>
            <div className={classes.projectsWrapper}>
              <Grid container spacing={8} justify="center">
                <Grid item xs={12} xl={8} md={8} sm={12}>
                  <Header title="Modulos" subtitle="Selecione um modulo" />
                </Grid>
                <Grid item xs={12} xl={8} md={8} sm={12}>
                  <ProjectTile
                    onSelect={() => goToTasks('management')}
                    onDelete={() => console.log('delete')}
                    image={projectImage}
                    keywords={['Diagramas', 'Histórias de Usuário']}
                    name={'Análise e Gerenciamento de Projeto'}
                    description="Exercite suas habilidades de analista de projeto, criando e resolvendo os desafios propostos. 
                    Neste módulo você irá criar histórias de usuários e diagramas de caso de uso."
                  />
                </Grid>
                <Grid item xs={12} xl={8} md={8} sm={12}>
                  <ProjectTile
                    onSelect={() => goToTasks('development')}
                    onDelete={() => console.log('delete')}
                    image={devImage}
                    keywords={['Programação']}
                    name={'Desenvolvimento'}
                    description="Amplie suas habilidades de desenvolvedor, resolvendo com programação o desafio proposto. 
                    Neste módulo sua tarefa é solucionar o problema utilizando toda sua capacidade com linguagens de programação"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        )}
      />
    </Switch>
  )
}

ProjectsPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
  projects: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  newDialogOpen: PropTypes.bool, // from enhancer (withStateHandlers)
  toggleDialog: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  deleteProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  collabProjects: PropTypes.object, // from enhancer (withHandlers - firebase)
  addProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  goToTasks: PropTypes.func.isRequired // from enhancer (withHandlers - router)
}

export default ProjectsPage
