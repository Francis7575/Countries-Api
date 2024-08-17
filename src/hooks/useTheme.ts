import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useTheme = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const bodyElement = document.body;

    useEffect(() => {
        if (theme === 'light') {
            bodyElement.classList.add('light-color');
            bodyElement.classList.remove('dark-color');
        } else {
            bodyElement.classList.add('dark-color');
            bodyElement.classList.remove('light-color');
        }
    }, [theme]);
};

export default useTheme;
