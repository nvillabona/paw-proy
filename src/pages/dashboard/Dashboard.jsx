import React, { useEffect, useState } from 'react'
import Post from '../../components/common/Post';
import NewPost from '../../components/common/NewPost';
import usePosts from '../../hooks/usePosts';
import AppLoader from '../../components/common/AppLoader';

const Dashboard = () => {
  const { getAllPosts } = usePosts()
  const [posts, setposts] = useState([]);
  const [loadingPosts, setloadingPosts] = useState(false);

  const handleLoadPosts = async () => {
    setloadingPosts(true)
    getAllPosts()
      .then((res) => {
        setposts(res)
        setloadingPosts(false)
      })
  }
  useEffect(() => {
    handleLoadPosts()

  }, []);

  return (
    <div className='postContainer'>
      <NewPost loadPosts={handleLoadPosts} />
      {
        loadingPosts ?
          <AppLoader />
          :
          posts.map(post => (
            <Post key={post.id} post={post} />
          ))
      }
    </div>
  )
}

export default Dashboard