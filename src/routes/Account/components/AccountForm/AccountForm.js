import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button'
import { TextField } from 'redux-form-material-ui'
import ProviderDataForm from '../ProviderDataForm'

function AccountForm({ account, handleSubmit, submitting, pristine, classes }) {
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h4>Conta</h4>
      <div className={classes.fields}>
        <Field
          fullWidth
          name="displayName"
          component={TextField}
          variant="outlined"
          className={classes.field}
          label="Nome"
        />
        <Field
          name="email"
          label="Email"
          component={TextField}
          variant="outlined"
          className={classes.field}
          fullWidth
        />
        <Field
          name="avatarUrl"
          label="URL do Avatar"
          variant="outlined"
          component={TextField}
          className={classes.field}
          fullWidth
        />
      </div>
      {!!account && !!account.providerData && (
        <div>
          <h4>Linked Accounts</h4>
          <ProviderDataForm providerData={account.providerData} />
        </div>
      )}
      <Button
        color="primary"
        type="submit"
        disabled={pristine || submitting}
        className={classes.submit}>
        {submitting ? 'Saving' : 'Save'}
      </Button>
    </form>
  )
}

AccountForm.propTypes = {
  account: PropTypes.object,
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired // from enhancer (reduxForm)
}

export default AccountForm
