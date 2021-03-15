import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppBar from './appBar';
import PostForm from './postForm';
import PostsGrid from './postsGrid';

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
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8001/api/posts')
            setPosts(response.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <AppBar />
            <main className={classes.layout}>
                <PostForm setPosts={setPosts}/>
            </main>
            <PostsGrid posts={posts}/>
        </>
    )
}