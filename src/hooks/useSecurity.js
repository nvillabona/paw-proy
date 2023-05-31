
import {useNavigate} from 'react-router-dom';
import routes from '../routes/routes.jsx';
import { axiosInstance } from '../api/axios.js';
import useNotify from './useNotify.js';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice.jsx';

const useSecurity = () => {

    const navigate = useNavigate();
    const { showMessage } = useNotify();
    const dispatch = useDispatch()


    const submitLogin = async (credentials)=> {
        axiosInstance.post('/user', JSON.stringify({...credentials}))
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('userId', res.data.user)
            localStorage.setItem('username', res.data.userName)
            dispatch(setUser({...res.data.userName}))
            navigate(routes.dashboard.path)
        })
        .catch(err=>showMessage(err.response.data.message, 'error'))
    }

    const handleRegister = async (credentials) => {
        return axiosInstance.post('/user/register', JSON.stringify({...credentials}))
        .then(res => {
            showMessage(res.data.message, 'success')
            console.log(res.data)
            return res.data.ok
        })
        .catch(err=>{
            showMessage(err.response.data.message, 'error')
            return err.response.data.ok
        })
    }

    const handleLogout = () => {
        navigate(routes.login.path)
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('username')

    }


    return {
        submitLogin,
        handleLogout,
        handleRegister
    }

}

export default useSecurity;