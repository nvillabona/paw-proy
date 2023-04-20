import React from 'react'
import { Card, CardContent, CardHeader, TextField, Button, Box } from '@mui/material'
import StringAvatar from './StringAvatar'

const NewPost = () => {
    return (
        <div>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    avatar={
                        <StringAvatar userName={'N'} />
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