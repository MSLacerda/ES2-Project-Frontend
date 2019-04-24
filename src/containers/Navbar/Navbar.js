import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { LIST_PATH } from 'constants/paths'
import AccountMenu from './AccountMenu'
import LoginMenu from './LoginMenu'
import { Tabs, Tab } from '@material-ui/core'

function Navbar({
  avatarUrl,
  displayName,
  authExists,
  goToAccount,
  handleLogout,
  closeAccountMenu,
  anchorEl,
  handleMenu,
  classes
}) {
  return (
    <div>
      {authExists ? (
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.flex}
              component={Link}
              to={authExists ? LIST_PATH : '/'}>
              Brand
            </Typography>
            {authExists ? (
              <AccountMenu
                avatarUrl={avatarUrl}
                displayName={displayName}
                onLogoutClick={handleLogout}
                goToAccount={goToAccount}
                closeAccountMenu={closeAccountMenu}
                handleMenu={handleMenu}
                anchorEl={anchorEl}
              />
            ) : (
              <LoginMenu />
            )}
          </Toolbar>
          {window.location.pathname.indexOf('tasks') != -1 ? (
            <Tabs
              onChange={e => {
                console.log(e)
              }}>
              <Tab label={'Exercicios'} />
              <Tab label={'Resultados'} />
            </Tabs>
          ) : (
            ''
          )}
        </AppBar>
      ) : (
        <span></span>
      )}
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  displayName: PropTypes.string, // from enhancer (flattenProps - profile)
  avatarUrl: PropTypes.string, // from enhancer (flattenProps - profile)
  authExists: PropTypes.bool, // from enhancer (withProps - auth)
  goToAccount: PropTypes.func.isRequired, // from enhancer (withHandlers - router)
  handleLogout: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  closeAccountMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  handleMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  anchorEl: PropTypes.object // from enhancer (withStateHandlers - handleMenu)
}

export default Navbar
