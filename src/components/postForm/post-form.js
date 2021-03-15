import React, { useState } from 'react'
import axios from 'axios'

export const PostForm = () => {
    const [post, setPost] = useState({
        title: '',
        text: ''
    })

    const submit = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(
                'http://localhost:8001/api/posts',
                post
            )
            console.log('minha resposta', response)
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
