import axios from 'axios'
import React, { useState } from 'react'

export const PostForm = ({ setPosts }) => {
    const [post, setPost] = useState({
        title: '',
        text: ''
    })

    const submit = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post(
                'http://localhost:8001/api/posts',
                post
            )
            setPosts(previousList => [
                ...previousList,
                ...[data]
            ])
            setPost({
                title: '',
                text: ''
            })
        } catch (error) {
            console.error('Deu erro aqui', error)
        }
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
        <form onSubmit={submit}>
            <label>Title</label>
            <input type='text' onChange={handleTitleOnChange} value={post.title}/>
            <label>Text</label>
            <input type='text' onChange={handleTextOnChange} value={post.text}/>
            <button type='submit' color='primary'>Submit</button>
        </form>
    )
}
