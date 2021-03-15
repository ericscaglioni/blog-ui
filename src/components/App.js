import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from './appBar';
import PostForm from './postForm';
import PostsGrid from './postsGrid'

const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
}))

export default () => {
    const classes = useStyles()

    return (
        <>
            <AppBar />
            <main className={classes.layout}>
                <PostForm />
            </main>
            <PostsGrid />
        </>
    )
}