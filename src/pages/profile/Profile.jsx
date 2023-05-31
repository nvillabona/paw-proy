import React, { useEffect, useState } from 'react'
import ProfileInfoCard from '../../components/profile/ProfileInfoCard';
import Post from '../../components/common/Post';
import { Divider, Typography } from '@mui/material';
import usePosts from '../../hooks/usePosts';

const Profile = () => {
  const { getUserPosts } = usePosts()
  const [posts, setposts] = useState([]);
  const [loadingPosts, setloadingPosts] = useState(false);

  const handleLoadPosts = async () => {
    setloadingPosts(true)
    getUserPosts(localStorage.getItem('userId'))
    .then((res)=>{
      console.log(res)
      setposts(res)
      setloadingPosts(false)
    })
  }
  useEffect(() => {
    handleLoadPosts()

  }, []);

  return (
    <div className='profileContainer'>
      <ProfileInfoCard 
        userName={localStorage.getItem('username')}
        postsCount={posts.length}
      />
      <Divider>
        <Typography variant="body1" color="initial">Posts by the user</Typography>
      </Divider>
      {
        posts.length > 0 ?
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
        :
        <Typography variant="h5" color="initial" sx={{mt:4}}>The user does not have any post</Typography>
      }
    </div>
  )
}

export default Profile;