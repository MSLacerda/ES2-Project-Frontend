import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import Button from '@material-ui/core/Button'
import { required, validateEmail } from 'utils/form'
import { Link } from 'react-router-dom';
import { LOGIN_PATH, SIGNUP_PATH } from 'constants/paths';

function LoginForm({ pristine, submitting, handleSubmit, classes }) {
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.header}>
        <h1> Bem-vindo </h1>
        <h3> Login </h3>
      </div>
      <div className={classes.input}>
        <Field
          name="email"
          component={TextField}
          autoComplete="email"
          label="Email"
          validate={[required, validateEmail]}
          variant="outlined"
        />
      </div>
      <div className={classes.input}>
        <Field
          name="password"
          component={TextField}
          autoComplete="current-password"
          label="Password"
          type="password"
          validate={required}
          variant="outlined"
        />
      </div>
      <div className={classes.submit}>
        <Button
          fullWidth
          color="primary"
          type="submit"
          variant="contained"
          disabled={pristine || submitting}>
          {submitting ? 'Carregando' : 'Login'}
        </Button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default LoginForm
