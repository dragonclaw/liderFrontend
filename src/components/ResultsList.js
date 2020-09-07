import React, { useState, useEffect } from 'react'
import ResultCard from './ResultCard'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
margin:1%;
justify-content: center;
`

function ResultsList(props) {

	const [results, setResults] = useState([])

	useEffect(() => {
		setResults(props.results)
	}, [props.results])

	return (
		<Container>
			{results.length ? (
				results.map((data, index) => {
					return (<ResultCard key={index} data={data}></ResultCard>)
				})) : 'No hay resultados'}
		</Container >
	)
}

export default ResultsList
