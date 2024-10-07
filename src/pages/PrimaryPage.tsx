import ThemeBar from "../components/common/ThemeBar"
import SearchBar from '../components/primarypage/SearchBar'
import Filters from '../components/primarypage/Filters'
import CountryDetails from "../components/primarypage/CountryDetails"
import { useState } from 'react';

const PrimaryPage = () => {
	const [isSearching, setIsSearching] = useState<boolean>(false);

	return (
		<>
			<ThemeBar />
			<main className="pb-[2.813rem]">
				<div className="sm:flex sm:justify-between pl-[3.438rem] sm:pl-0 sm:gap-14 sm:mx-[3.438rem] sm:mt-12 lg:px-[5rem] xl:px-0 lg:mx-0 xl:max-w-[1200px] xl:mx-auto">
					<SearchBar setIsSearching={setIsSearching} />
					<Filters setIsSearching={setIsSearching} />
				</div>
				<CountryDetails isSearching={isSearching} />
			</main>
		</>
	)
}

export default PrimaryPage