import { Button, makeStyles, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import SuccessSnackBar from '../successSnackBar'

const REQUIRED_FIELD = 'Campo obrigatorio'
const SAVE_SUCCESS_MESSAGE = 'Post salvo com sucesso'

const useStyles = makeStyles(theme => ({
    textField: {
        marginBottom: theme.spacing(1)
    }
}))

export const PostForm = ({ setPosts }) => {
    const classes = useStyles()

    const [submitted, setSubmitted] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [post, setPost] = useState({
        title: '',
        text: ''
    })
    
    const handleSuccessMessageClose = () => {
        setShowSuccessMessage(false)
    }

    const submit = async (e) => {
        try {
            e.preventDefault()
            setSubmitted(true)
            if (!isValid()) return
            const { data } = await axios.post(
                'http://localhost:8001/api/posts',
                post
            )
            setPosts(previousList => [
                ...previousList,
                ...[data]
            ])
            setShowSuccessMessage(true)
            clearForm()
        } catch (error) {
            console.error('Deu erro aqui', error)
        }
    }

    const clearForm = () => {
        setSubmitted(false)
        setPost({
            title: '',
            text: ''
        })
    }

    const isValid = () => {
        if (!post.title || !post.text) return false
        return true
    }

    const handleTitleOnChange = e => {
        e.persist()
        setPost({
            ...post,
            title: e.target.value
        })
    }

    const handleTextOnChange = e => {
        e.persist()
        setPost({
            ...post,
            text: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={submit} noValidate autoComplete='off'>
                <div>
                    <TextField
                        fullWidth
                        required
                        id='title'
                        label='Title'
                        onChange={handleTitleOnChange}
                        value={post.title}
                        className={classes.textField}
                        error={submitted && !post.title}
                        helperText={submitted && !post.title && REQUIRED_FIELD}
                    />
                </div>
                <div>
                    <TextField
                        fullWidth
                        required
                        id='text'
                        label='Text'
                        onChange={handleTextOnChange}
                        value={post.text}
                        className={classes.textField}
                        error={submitted && !post.text}
                        helperText={submitted && !post.text && REQUIRED_FIELD}
                    />
                </div>
                <Button fullWidth type='submit' variant='contained' color='primary' size="large">
                    Submit
                </Button>
            </form>
            <SuccessSnackBar
                open={showSuccessMessage}
                message={SAVE_SUCCESS_MESSAGE}
                handleClose={handleSuccessMessageClose}
            />
        </>
    )
}
