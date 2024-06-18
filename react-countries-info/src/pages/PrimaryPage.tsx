import ThemeBar from "../components/common/ThemeBar"
import SearchBar from '../components/primarypage/SearchBar'
import Filters from '../components/primarypage/Filters'
import CountryDetails from "../components/primarypage/CountryDetails"

const PrimaryPage = () => {
    return (
        <>
            <ThemeBar />
            <main className="pb-[2.813rem]">
                <div className="sm:flex sm:justify-between sm:mx-[3.438rem] sm:mt-12 lg:mx-[5rem]">
                    <SearchBar />
                    <Filters />
                </div>
                <CountryDetails />
            </main>
        </>
    )
}

export default PrimaryPage