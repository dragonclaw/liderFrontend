import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Input } from 'semantic-ui-react'
import LogoSVG from '../lider-logo.svg'

const Header = styled.div`
background-color:#0671CD;
height:100px;
width: 100vw;
display:flex;
`
const Logo = styled.img`
    height:50px;
	margin: 25px;
	@media (max-width: 768px) {
		display:none;
	  }
`

const Form = styled.form`
display:flex;
align-self:center;
flex:1;
justify-content:flex-start;
`

const SearchButton = styled.input`
background-color:#E4B138;
color:white;
font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #E4B138;
  border-radius: 3px;
`

function SearchBar(props) {
	const [searchTerm, setSearchTerm] = useState('')

	const onSubmitTerm = (event) => {
		event.preventDefault();
		props.onSubmit(searchTerm);
	}

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	}


	return (
		<Header>
			<Logo src={LogoSVG}></Logo>
			<Form onSubmit={onSubmitTerm}>
				<Input placeholder='Buscar productos...' type='textarea' value={searchTerm} onChange={handleChange} style={{ marginLeft: '25px', width: '75%' }}></Input>
				<SearchButton type='submit' value={'Buscar'}></SearchButton>
			</Form>
		</Header >
	)
}

export default SearchBar




