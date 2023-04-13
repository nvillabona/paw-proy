import { Avatar, Box, Card, CardContent, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: name.charAt(0),
    };
}

const ProfileInfoCard = ({ userName, postsCount }) => {
    console.log(userName);
    return (
        <Card sx={{ my: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Avatar {...stringAvatar(userName)} />
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