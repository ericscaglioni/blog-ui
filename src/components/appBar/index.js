import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
      }
}))

export default () => {
    const classes = useStyles()
    return (
        <AppBar position="absolute" color="primary" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Blog app
                </Typography>
           </Toolbar>
       </AppBar>
    )
}