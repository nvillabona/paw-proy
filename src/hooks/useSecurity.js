
import {useNavigate} from 'react-router-dom';
import routes from '../routes/routes.jsx';

const useSecurity = () => {

    const navigate = useNavigate();


    const submitLogin = async ()=> {
        navigate(routes.dashboard.path)
    }

    const handleLogout = () => {
        navigate(routes.login.path)

    }


    return {
        submitLogin,
        handleLogout,
    }

}

export default useSecurity;