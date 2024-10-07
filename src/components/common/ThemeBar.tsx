import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store/store';
import { themesliceAction } from "../../store/themeSlice";
import { DarkMoonIcon, LightMoonIcon } from "../../svgs";
import { useState } from "react";

const ThemeBar = () => {
    const theme = useSelector((store: RootState) => store.theme)
    const dispatch = useDispatch();
    const [isToggling, setIsToggling] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsToggling(true);  // Indicate that the toggle is in progress

        setTimeout(() => {
            dispatch(themesliceAction.toggleTheme());
            setIsToggling(false);  // Reset the toggling state after the theme change
        }, 300);
    };

    return (
        <header className={` ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-dark-gray'}  shadow-themeBar py-[1.875rem] px-4 sm:px-[3.438rem] lg:px-[5rem]`}>
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <h1 className="text-[.95rem] sm:text-[1rem] md:text-[1.3rem] font-extrabold">Where in the world?</h1>
                <button className="flex items-center gap-[8px]" onClick={toggleTheme}>
                    {theme === 'light' ? <LightMoonIcon className="md:w-[20px] md:h-[20px]" width={16} height={16} /> : <DarkMoonIcon className="md:w-[20px] md:h-[20px]" width={16} height={16} />}
                    <p className="text-[.95rem] sm:text-[1rem] font-semibold">
                        {isToggling ? 'Switching...' : 'Dark Mode'}
                    </p>
                </button>
            </div >
        </header>
    )
}

export default ThemeBar