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
            <NewProjectDialog
              onSubmit={addProject}
              open={newDialogOpen}
              onRequestClose={toggleDialog}
            />
            <div className={classes.tiles}>
              <ProjectTile
                onSelect={() => goToTasks('management')}
                onDelete={() => console.log('delete')}
                image={projectImage}
                keywords={['Diagramas', 'Casos de Uso']}
                name={'Gerenciamento de Projeto'}
              />

              <ProjectTile
                onSelect={() => goToTasks('development')}
                onDelete={() => console.log('delete')}
                image={devImage}
                keywords={['Programação']}
                name={'Desenvolvimento'}
              />
              {/* <NewProjectTile onClick={toggleDialog} />
              {!isEmpty(projects) &&
                projects.map((project, ind) => (
                  <ProjectTile
                    key={`Project-${project.id}-${ind}`}
                    name={project.name}
                    onSelect={() => goToProject(project.id)}
                    onDelete={() => deleteProject(project.id)}
                  />
                ))} */}
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
