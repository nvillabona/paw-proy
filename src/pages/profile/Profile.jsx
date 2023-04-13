import React from 'react'
import ProfileInfoCard from '../../components/profile/ProfileInfoCard';
import posts from '../../mocks/posts';
import Post from '../../components/common/Post';
import { Divider, Typography } from '@mui/material';

const Profile = () => {
  return (
    <div className='profileContainer'>
      <ProfileInfoCard 
        userName={"pawsandclaws"}
        postsCount={posts.filter((post)=> post.author === "pawsandclaws").length}
      />
      <Divider>
        <Typography variant="body1" color="initial">Posts by the user</Typography>
      </Divider>
      {
        posts.filter((post)=> post.author === "pawsandclaws").map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default Profile;