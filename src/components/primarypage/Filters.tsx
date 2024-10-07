import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../store/filterSlice';
import { RootState } from '../../store/store';
import { LightDropdown, DarkDropdown, LightCrossIcon, DarkCrossIcon } from '../../svgs';

type FilterProps = {
  setIsSearching: (value: boolean) => void
}

const Filter = ({setIsSearching}: FilterProps) => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const dropDownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('Filter by Region');
  const [filterSelected, setFilterSelected] = useState<boolean>(false);  // New state to track if a filter is selected
  const filters = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    // Dispatch filter action when selectedFilter changes
    switch (selectedFilter) {
      case 'All':
        dispatch(filterAction.all());
        break;
      case 'Africa':
        dispatch(filterAction.africa());
        break;
      case 'America':
        dispatch(filterAction.america());
        break;
      case 'Asia':
        dispatch(filterAction.asia());
        break;
      case 'Europe':
        dispatch(filterAction.europe());
        break;
      case 'Oceania':
        dispatch(filterAction.oceania());
        break;
      default:
        dispatch(filterAction.all());
        break;
    }
  }, [selectedFilter, dispatch]);

  useEffect(() => {
    // Close dropdown when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsSearching(true)
  };

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    setFilterSelected(true);
    setIsOpen(false); // Close dropdown after selecting a filter
  };

  const handleResetFilter = (e: React.MouseEvent) => {
    e.stopPropagation();  // Prevent the dropdown toggle
    setSelectedFilter('Filter by Region');
    setFilterSelected(false);
  };

  return (
    <div ref={dropDownRef} className='max-w-[200px] w-full relative z-50'>
      <div onClick={toggleDropdown}
        className={`mt-[2.5rem] sm:mt-0 cursor-pointer flex justify-between rounded-[5px] items-center text-left relative text-[.75rem] md:text-[.875rem] shadow-searchBar w-full py-[.875rem] pl-[1.5rem] pr-[1.25rem] ${theme === 'light' ? 'bg-white' : 'bg-dark-gray text-white'}`}>
        {selectedFilter}
        <div className='flex items-center gap-2'>
          {filterSelected && (
            <button onClick={handleResetFilter}>
              <span>{theme === 'light' ? LightCrossIcon : DarkCrossIcon}</span>
            </button>
          )}
          <span>{theme === 'light' ? LightDropdown : DarkDropdown}</span>
        </div>
      </div>
      <ul className={`absolute filter-transition ${isOpen ? 'open' : ''} w-full ${theme === 'light' ? 'bg-white text-black' : 'bg-dark-gray text-white'} rounded-[5px] mt-[8px] max-w-[200px] shadow-searchBar`}>
        {filters.map(filter => (
          <li key={filter} className='flex flex-col gap-[8px] items-start'>
            <button onClick={() => handleFilterSelect(filter)} className={`text-[.75rem] w-full text-left md:text-[.875rem] cursor-pointer pl-[1.5rem] ${theme === 'light' ? 'bg-white hover:bg-light-hover' : 'bg-dark-gray hover:bg-dark-hover'}`}>
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
