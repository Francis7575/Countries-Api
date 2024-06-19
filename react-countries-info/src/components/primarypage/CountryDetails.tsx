import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Link } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'
import LazyLoad from 'react-lazyload'
import LoadingIcon from '/icon-loading.gif'

const CountryDetails = () => {
  useTheme();
  const theme = useSelector((state: RootState) => state.theme);
  const filter = useSelector((store: RootState) => store.filter);

  const loadingPlaceholder = (
    <div className="flex items-center justify-center w-full h-full">
      <img src={LoadingIcon} alt="Loading..." />
    </div>
  );

  return (
    <section className='mt-8 lg:mt-12'>
      <div className='grid gap-[2.5rem] gap-[4.68rem] grid-cols-dynamic px-[3.438rem] lg:px-[5rem]'>
        {filter.map((item) => (
          <LazyLoad key={item.name} height={100} offset={-180} placeholder={loadingPlaceholder}>
            <Link to={`/country/${item.name}`} className='scale-transition'>
              <div className='flex flex-col w-full h-full hover:opacity-80'>
                <img src={item.flags.png} alt={`${item.name} flag`} className='rounded-[5px] w-full h-full' />
                <div className={`shadow-countryCard flex flex-col flex-grow pl-[1.5rem] pt-[1.5rem] pb-[2.875rem] rounded-[5px] ${theme === 'light' ? 'bg-white text-black' : 'bg-dark-gray text-white'} `}>
                  <h2 className='mb-4 text-[1.125rem] font-extrabold'>{item.name}</h2>
                  <div className='text-[.875rem] flex flex-col gap-[8px] leading-[16px]'>
                    <p className='font-semibold'>Population: <span className='font-light'>{item.population}</span></p>
                    <p className='font-semibold'>Region: <span className='font-light'>{item.region}</span></p>
                    <p className='font-semibold'>Capital: <span className='font-light'>{item.capital}</span></p>
                  </div>
                </div>
              </div>
            </Link>
          </LazyLoad>
        ))}
      </div>
    </section>
  );
};

export default CountryDetails;
