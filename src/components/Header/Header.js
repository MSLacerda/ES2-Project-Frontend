import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core';

function Header({classes, title, subtitle}) {
    return (
        <div className={classes.header}>
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography component="h4" variant="h4" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography component="h6" variant="h6" className={classes.subtitle}>
                        {subtitle}
                </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default Header
