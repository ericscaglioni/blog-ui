import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default ({ postId, title, text }) => (
    <Grid item xs={4} key={postId}>
        <Card variant='outlined'>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="h5" component="h4">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Grid>
)
