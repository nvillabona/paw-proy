import { axiosInstance } from "../api/axios"
import useNotify from "./useNotify"


const usePosts = () => {
    const { showMessage } = useNotify()

    const getAllPosts = async () => {
        return axiosInstance.get('/posts/')
        .then(res => res.data.posts)
    }

    const getUserPosts = async (id) => {
        console.log(`/posts/user/${id}`)
        return axiosInstance.get(`/posts/user/${id}`)
        .then(res => res.data.posts)
    }

    const createPost = async (post) => {
        return axiosInstance.post('/posts/', JSON.stringify({...post}))
        .then(res => {
            showMessage(res.data.message, 'success')
            console.log(res.data)
            return res.data.ok
        })
    }

    return {
        getAllPosts,
        getUserPosts,
        createPost
    }

}

export default usePosts