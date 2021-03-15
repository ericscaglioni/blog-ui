import { Grid } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

export default () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8001/api/posts')
            setPosts(response.data)
        }
        fetchData()
    }, [])

    const mountList = () => (
        posts.map(post => {
            const id = Object.keys(post)[0]
            const { title, text } = post[id]
            return (
                <PostItem key={id}
                    title={title}
                    postId={id}
                    text={text}
                />
            )
        }
    ))

    return (
        <Grid container spacing={3}>
            {mountList()}
        </Grid>
    )
}