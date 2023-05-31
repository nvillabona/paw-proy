import {toast} from 'react-toastify';

const useNotify = () => {

    const showMessage = (message, type) => {

        const options = {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: 'colored'
        };

        switch (type) {
            case 'success':
                return toast.success(message, options);
            case 'info':
                return toast.info(message, options);
            case 'warning':
                return toast.info(message, options);
            case 'error':
                return toast.error(message, options);
            default:
                return toast.dark(message, options);
        }
    }

    return {
        showMessage,
    }
}

export default useNotify;