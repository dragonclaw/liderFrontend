import React, { useState, useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styled, { css } from 'styled-components'


const Container = styled.div`
margin:1%;
`


function ResultCard(props) {
	const [data, setData] = useState({})

	useEffect(() => {
		if (props.data) {
			setData(props.data)
		}

	}, [props.data])

	return (
		<Container>
			{data && (<Card>
				<Image src={`http://${data.image}`} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{data.brand}</Card.Header>
					<Card.Meta>
						<span className='date'>Precio: {data.price}</span>
					</Card.Meta>
					<Card.Description>
						{data.description}
					</Card.Description>
				</Card.Content>
				{data.discount && (<Card.Content extra>
					<a>
						<Icon name='dollar sign' />
						Descuento {data.discount}%
					</a>
				</Card.Content>)}
			</Card>)}
		</Container>

	)
}

export default ResultCard
