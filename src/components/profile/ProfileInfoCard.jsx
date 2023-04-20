import {  Box, Card, CardContent, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';
import StringAvatar from '../common/StringAvatar'



const ProfileInfoCard = ({ userName, postsCount }) => {
    return (
        <Card sx={{ my: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <StringAvatar userName={userName} />
                    <Typography variant="h6" color="initial">{`@${userName}`}</Typography>
                    <Grid container sx={{ mt: 2 }}>
                        <Grid item xs={4}>
                            <Typography>Followers</Typography>
                            <Typography>15</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Following</Typography>
                            <Typography>49</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography>Post</Typography>
                            <Typography>{postsCount}</Typography>
                        </Grid>
                    </Grid>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ my: 2 }}
                            startIcon={<PersonAddIcon/>}
                        >
                            Follow
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ mx: 2, color: 'white' }}
                            startIcon={<EmailIcon />}
                        >
                            Message
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProfileInfoCard