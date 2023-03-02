import React from 'react'
import { Card, Avatar, CardContent, CardHeader, TextField, Button, Box } from '@mui/material'

const NewPost = () => {
    return (
        <div>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="user">
                            {'N'}
                        </Avatar>
                    }
                    title="New Post"
                />
                <CardContent>
                    <TextField
                        id="filled-multiline-static"
                        label="Post content"
                        multiline
                        fullWidth
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                    />
                    <Box display='flex' justifyContent='space-around'>
                        <Button
                            variant='outlined'
                            color='primary'
                            sx={{ mt: 2 }}
                        >
                            Add photo
                        </Button>
                        <Button
                            variant='contained'
                            sx={{ mt: 2 }}
                        >
                            Create Post
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default NewPost