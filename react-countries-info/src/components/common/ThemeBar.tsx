import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store/store';
import { themesliceAction } from "../../store/themeSlice";
import { DarkMoonIcon, LightMoonIcon } from "../../svgs";

const ThemeBar = () => {
    const theme = useSelector((store: RootState) => store.theme)
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(themesliceAction.toggleTheme());
    }

    return (
        <header className={` ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-dark-gray'} flex justify-between items-center shadow-themeBar py-[1.875rem] px-4 lg:px-[5rem]`}>
            <h1 className="text-[.875rem] md:text-[1.5rem] font-extrabold">Where in the world?</h1>
            <button className="flex items-center gap-[8px]" onClick={toggleTheme}>
                {theme === 'light' ? <LightMoonIcon className="md:w-[20px] md:h-[20px]" width={16} height={16} /> : <DarkMoonIcon className="md:w-[20px] md:h-[20px]" width={16} height={16} />}
                <p className="text-[.75rem] text-[1rem] font-semibold">Dark Mode</p>
            </button>
        </header>
    )
}

export default ThemeBar