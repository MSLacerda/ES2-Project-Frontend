import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'

const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper'
const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

function Home({ classes }) {
  return (
    <div className={classes.root}>
      <div className="flex-row-center">
        <h2>Home (Em Desenvolvimento)</h2>
      </div>
      <div className="flex-row-center">
        <div className={classes.section}>
          <h3>Rotas</h3>
          <span>
            Redirecionamento e proteção de rotas:
            <div>
              <span>
                <a
                  href={reactRouterUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  react-router
                </a>
              </span>
              <span> and </span>
              <a
                href={authWrapperUrl}
                target="_blank"
                rel="noopener noreferrer">
                redux-auth-wrapper
              </a>
            </div>
          </span>
        </div>
        <div className={classes.section}>
          <h4>Desconectado</h4>
          <span>
            O usuário é redirecionado <pre>/login</pre> se não estiver autenticado e tentar acessar:
          </span>
          <ul>
            <li>
              <Link to={LIST_PATH}>Projects</Link>
            </li>
            <li>
              <Link to={ACCOUNT_PATH}>Account</Link>
            </li>
          </ul>
        </div>
        <div className={classes.section}>
          <h4>Logged In</h4>
          <span>
            O usuário é redirecionado para <pre>/projects</pre> se estiver autenticado e tentar visitar
          </span>
          <ul>
            <li>
              <Link to={LOGIN_PATH}>Login</Link>
            </li>
            <li>
              <Link to={SIGNUP_PATH}>Signup</Link>
            </li>
          </ul>
        </div>
        <div className={classes.section}>
          <div>
            <h4>Formulários</h4>
            <span>Redirecionamento e proteção de rotas usando:</span>
            <div>
              <span>
                <a
                  href={reactRouterUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  redux-form
                </a>
              </span>
            </div>
          </div>
          <span>Utilizando redux-forms:</span>
          <Link to={ACCOUNT_PATH}>
            <p>Account Page</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default Home
