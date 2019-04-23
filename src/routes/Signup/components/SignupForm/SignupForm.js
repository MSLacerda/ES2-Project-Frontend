import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import Button from '@material-ui/core/Button'
import { required, validateEmail } from 'utils/form'

function SignupForm({ pristine, submitting, handleSubmit, classes }) {
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.header}>
        <h1> Bem-vindo </h1>
        <h3> Cadastro </h3>
      </div>
      <Field
        className={classes.input}
        name="username"
        component={TextField}
        autoComplete="username"
        label="Username"
        variant="outlined"
        validate={required}
      />
      <Field
        className={classes.input}
        name="email"
        component={TextField}
        autoComplete="email"
        label="Email"
        variant="outlined"
        validate={[required, validateEmail]}
      />
      <Field
        className={classes.input}
        name="password"
        component={TextField}
        autoComplete="current-password"
        label="Password"
        variant="outlined"
        type="password"
        validate={required}
      />
      <div className={classes.submit}>
        <Button
          fullWidth
          color="primary"
          type="submit"
          variant="contained"
          disabled={pristine || submitting}>
          {submitting ? 'Carregando' : 'Cadastrar'}
        </Button>
      </div>
    </form>
  )
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default SignupForm
