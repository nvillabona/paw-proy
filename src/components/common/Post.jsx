import React, { useState } from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    Typography,
    Collapse,
    CardActions,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    TextField,
    Button
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';

// eslint-disable-next-line react/prop-types

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <>
        {
            !expand ? <InsertCommentIcon {...other} /> : <CommentsDisabledIcon {...other} />
        }
    </>
})(({ theme, expand }) => ({
    cursor: 'pointer',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Post = ({ post }) => {

    const [expanded, setExpanded] = useState(false);

    function randomDate() {
        const startDate = new Date('2023-02-01');
        const endDate = new Date();
        const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ my: 2 }}>
            <CardHeader
                avatar={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="recipe">
                            {post.author.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" color="text.secondary" ml={2}>
                            {post.author}
                        </Typography>
                    </Box>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.title}
                subheader={randomDate()}
            />
            <CardMedia
                component="img"
                height="400"
                image={post.imageUrl}
                alt={post.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                />
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <List>
                        {
                            post.comments.map(comment => (
                                <>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="user">
                                                {comment.author.charAt(0)}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={`${comment.author}:`} secondary={comment.content} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </>
                            ))
                        }
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="user">
                                    {'N'}
                                </Avatar>
                            </ListItemAvatar>
                            <TextField fullWidth size='small' />
                            <Button variant='contained' size='medium' sx={{ml: 1}}>Post</Button>
                        </ListItem>
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Post