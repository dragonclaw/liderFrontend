import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsList from './components/ResultsList'


test('renders "no items" when the item list is empty', () => {
	render(<ResultsList results={[]} />)
	expect(screen.getByText(/No hay resultados/i)).toBeInTheDocument()
})

test('renders "items" when the item list', () => {
	render(<ResultsList results={[{
		"brand": "oqobdjn",
		"description": "uzmj zvjjkhwf",
		"discount": 50,
		"id": 71,
		"image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
		"price": 373935,
		"_id": "5f529692f8a26c2f258456b7"
	}]} />)
	expect(screen.getByText(/Precio/i)).toBeInTheDocument()
})