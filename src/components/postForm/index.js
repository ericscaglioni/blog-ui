import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { PostForm } from './post-form'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        }
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.paper}>
                <Typography component='h1' variant='h4' align='center' color='primary'>
                    Create post
                </Typography>
                <PostForm />
            </Paper>
        </>
    )
}