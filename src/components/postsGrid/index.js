import { Grid } from '@material-ui/core'
import React from 'react'
import PostItem from './PostItem'

export default ({ posts }) => {
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