import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useEffect, useState } from 'react'
import { LightSearchIcon, DarkSearchIcon } from '../../svgs';
import { RootState } from '../../store/store';
import { filterAction } from '../../store/filterSlice';

const SearchBar = () => {
    const theme = useSelector((store: RootState) => store.theme)
    const dispatch = useDispatch();
    const [input, setInput] = useState<string>('');

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInput(value);
    }

    useEffect(() => {
        dispatch(filterAction.searchAction(input));
    }, [input])

    useEffect(() => {
        if (input === '') {
            dispatch(filterAction.all())
        }
    }, [input]);

    return (
        <div className='mt-[1.5rem] sm:mt-0 px-4 relative w-full max-w-[350px] lg:max-w-[480px] sm:px-0'>
            <input type="text" value={input} onChange={handleSearchInput} placeholder='Search for a country…'
                className={`${theme === 'light' ? 'bg-white text-dark-gray' : 'bg-dark-gray text-white'} shadow-searchBar text-[.75rem] md:text-[.875rem] w-full outline-none py-[.875rem] pl-[4.625rem] pr-4 rounded-[5px]`} />
            <span className='absolute top-1/2 left-12 transform -translate-y-1/2'>
                {theme === 'light' ? LightSearchIcon : DarkSearchIcon}
            </span>
        </div>
    )
}

export default SearchBar