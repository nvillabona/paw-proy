import React, { useState } from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import StringAvatar from './StringAvatar';
import { formatDate } from '../../utils/utils';

// eslint-disable-next-line react/prop-types

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <>
        {
            !expand ? <InsertCommentIcon {...other} /> : <CommentsDisabledIcon {...other} />
        }
    </>
})(({ theme }) => ({
    cursor: 'pointer',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Post = ({ post }) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ my: 2 }}>
            <CardHeader
                avatar={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StringAvatar userName={post.creator} />
                        <Typography variant="body2" color="text.secondary" ml={2}>
                            {post.creator}
                        </Typography>
                    </Box>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.title}
                subheader={formatDate(post.createdAt)}
            />
            {
                post.imageUrl && 
                <CardMedia
                    component="img"
                    height="400"
                    image={post.imageUrl}
                    alt={post.title}
                />
            }
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
                                <div  key={comment.id}>
                                    <ListItem >
                                        <ListItemAvatar>
                                            <StringAvatar  userName={comment.user}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={`${comment.user}:`} secondary={comment.content} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            ))
                        }
                        <ListItem>
                            <ListItemAvatar>
                                <StringAvatar userName={'N'} />
                            </ListItemAvatar>
                            <TextField fullWidth size='small' />
                            <Button variant='contained' size='medium' sx={{ml: 1}}>Post</Button>
                        </ListItem>
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default Post