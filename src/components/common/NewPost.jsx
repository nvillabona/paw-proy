import React, { useState } from 'react'
import { Card, CardContent, CardHeader, TextField, Button, Box } from '@mui/material'
import StringAvatar from './StringAvatar'
import { useSelector } from 'react-redux';
import usePosts from '../../hooks/usePosts';

const NewPost = ({loadPosts}) => {
    const userName = useSelector(state => state.user.username);
    const initialState = {title:"", content: "", }
    const [info, setInfo] = useState(initialState);
    const { createPost } = usePosts();
    const submitPost = (e) => {
        e.preventDefault()
        createPost({...info, user: localStorage.getItem('userId')})
        .then((res)=>{
            if(res){
                setInfo(initialState)
                loadPosts()
            }})
        .catch(()=>{})
    }
    return (
        <div>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    avatar={
                        <StringAvatar userName={userName} />
                    }
                    title="New Post"
                />
                <CardContent>
                    <form onSubmit={submitPost}>
                    <TextField
                        id="filled-multiline-static"
                        label="Title"
                        multiline
                        fullWidth
                        required
                        value={info.title}
                        onChange={(e)=> setInfo({...info, title: e.target.value})}
                        variant="outlined"
                    />
                    <TextField
                        id="filled-multiline-static"
                        label="Post content"
                        multiline
                        fullWidth
                        required
                        value={info.content}
                        rows={4}
                        onChange={(e)=> setInfo({...info, content: e.target.value})}
                        sx={{ mt: 1 }}
                        variant="outlined"
                    />
                    <Box display='flex' justifyContent='space-around'>
                        {/* <Button
                            variant='outlined'
                            color='primary'
                            sx={{ mt: 2 }}
                        >
                            Add photo
                        </Button> */}
                        <Button
                            variant='contained'
                            sx={{ mt: 2 }}
                            type='submit'
                        >
                            Create Post
                        </Button>
                    </Box>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default NewPost