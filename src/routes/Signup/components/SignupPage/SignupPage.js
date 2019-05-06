import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import Paper from '@material-ui/core/Paper'
import { LOGIN_PATH } from 'constants/paths'
import SignupForm from '../SignupForm'

function SignupPage({ emailSignup, googleLogin, onSubmitFail, classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.leftPanel}>
        <SignupForm onSubmit={emailSignup} onSubmitFail={onSubmitFail} />
        <div className={classes.orLabel}>ou</div>
        <div className={classes.providers}>
          <GoogleButton
            type="light"
            label="Login com o Google"
            onClick={googleLogin}
          />
        </div>
        <div className={classes.login}>
          <span className={classes.loginLabel}> Já tem uma conta?</span>
          <Link className={classes.loginLink} to={LOGIN_PATH}>
            Login
          </Link>
        </div>
      </div>
      <div className={classes.rightPanel} />
    </div>
  )
}

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  emailSignup: PropTypes.func.isRequired, // from enhancer (withHandlers)
  googleLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
  onSubmitFail: PropTypes.func.isRequired // from enhancer (reduxForm)
}

export default SignupPage
