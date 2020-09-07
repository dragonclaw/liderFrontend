import React, { useState } from 'react';
import './App.css';
import ResultsList from './components/ResultsList'
import SearchBar from './components/SearchBar'
import APIService from "./services/searchService";

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const getSearchTerm = async (term) => {

		const response = await APIService.get('/products', {
			params: { queryText: term }
		})

		if (response.data.success) {
			setSearchResults(response.data.data)
		}
	}

	return (
		<>

			<SearchBar onSubmit={getSearchTerm}>

			</SearchBar>
			<ResultsList results={searchResults}></ResultsList>
		</>
	);
}

export default App;
