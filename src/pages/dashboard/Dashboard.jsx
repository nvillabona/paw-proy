import React from 'react'
import posts from '../../mocks/posts';
import Post from '../../components/common/Post';
import NewPost from '../../components/common/NewPost';

const Dashboard = () => {
  return (
    <div className='postContainer'>
        <NewPost />
        {
            posts.map(post=> (  
                <Post key={post.id} post={post} />
            ))
        }
    </div>
  )
}

export default Dashboard