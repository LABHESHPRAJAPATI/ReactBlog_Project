import React, { useState, useEffect } from 'react'
import { Container, PostFrom } from '../components'
import appwirteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setposts] = useState(null)
    const { slug } = useParams
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwirteService.getPost(slug).then((post) => {
                if (post) {
                    setposts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostFrom post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
