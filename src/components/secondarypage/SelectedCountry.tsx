import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import useTheme from '../../hooks/useTheme';
import { LightBackButton, DarkBackButton } from "../../svgs";
import { Currency, Languages } from '../../types/types'


const SelectedCountry = () => {
  useTheme();
  const theme = useSelector((state: RootState) => state.theme);
  const filter = useSelector((state: RootState) => state.filter);

  const { CountryName } = useParams();

  if (!CountryName) {
    return <p>Country name is not provided in the URL</p>;
  }

  const selectedCountry = filter.find(
    (country) => country.name.toLowerCase() === CountryName.toLowerCase() // By converting both strings to lowercase, you ensure that "France" and "france" are treated as equal.
  );

  if (!selectedCountry) {
    return <p>Country not found</p>;
  }

  return (
    <section className="pb-4 xl:pb-14">
      <div className="mt-[2.5rem] ml-[1.75rem] lg:ml-[50px] xl:ml-[80px] relative max-w-[6.5rem]">
        <Link
          to="/countries-info"
          className={`${theme === 'light' ? 'bg-white text-black hover:bg-light-hover' : 'bg-dark-gray text-white hover:bg-dark-hover'} scale-transition flex items-center gap-[8px] text-[.875rem] font-light w-full shadow-backBtn py-[.375rem] px-[1.5rem] rounded-[2px]`}>
          <span>{theme === 'light' ? LightBackButton : DarkBackButton}</span>
          <span>Back</span>
        </Link>
      </div>
      <div className={`mdup:flex mdup:items-center mdup:gap-14 lg:gap-20 mt-[64px] px-[50px] xl:px-[80px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <img src={selectedCountry.flags.png} alt={`${selectedCountry.name} flag`} className="mdup:w-[45%] w-full rounded-[5px]" />
        <div>
          <h2 className="mt-12 lg:mt-0 font-extrabold text-[1.375rem] md:text-[2rem]">{selectedCountry.name}</h2>
          <div className="xl:flex xl:gap-[117px]">
            <div className="mt-4 text-[.875rem] md:text-[1rem] flex flex-col gap-4 mb-8">
              <p className="font-semibold">Native Name:
                <span className="font-light"> {selectedCountry.nativeName}</span>
              </p>
              <p className="font-semibold">Population:
                <span className="font-light"> {selectedCountry.population.toLocaleString()}</span>
              </p>
              <p className="font-semibold">Region:
                <span className="font-light"> {selectedCountry.region}</span>
              </p>
              <p className="font-semibold">Sub Region:
                <span className="font-light"> {selectedCountry.subregion}</span>
              </p>
              <p className="font-semibold">Capital:
                <span className="font-light"> {selectedCountry.capital}</span>
              </p>
            </div>
            <div className="xl:mt-4 text-[.875rem] md:text-[1rem] flex flex-col gap-4 mb-9">
              <p className="font-semibold">Top Level Domain:
                <span className="font-light"> {selectedCountry.topLevelDomain}</span>
              </p>
              <p className="font-semibold">Currencies:
                <span className="font-light"> {selectedCountry.currencies?.map((currency: Currency) => currency.name)}</span>
              </p>
              <p className="font-semibold">Languages:
                <span className="font-light"> {selectedCountry.languages?.map((language: Languages) => language.name).join(', ') || 'N/A'}</span>
              </p>
            </div>
          </div>
          {selectedCountry.borders && selectedCountry.borders.length > 0 && (
            <div className="xl:flex xl:items-center xl:gap-8">
              <h3 className="mb-4">Border Countries:</h3>
              <div className="grid-container">
                {selectedCountry.borders?.map((item, idx) => (
                  <div key={idx} className={`text-center max-w-[96px] text-[.875rem] shadow-borderCard rounded-[2px] py-[6px] px-[10px] ${theme === 'light' ? 'bg-white' : 'bg-dark-gray'}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SelectedCountry;
