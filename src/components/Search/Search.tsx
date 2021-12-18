import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const FILTERED_CHARACTERS = gql`
	query GetFilteredLocations($name: String) {
		characters(filter: { name: $name }) {
			results {
				name
				image
				location {
					name
				}
			}
		}
	}
`;

const Search: React.FC = () => {
	const [name, setName] = useState('');
	const [getLocations, data] = useLazyQuery(FILTERED_CHARACTERS, {
		variables: {
			name,
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		getLocations();
	};
	return (
		<div>
			<Link to='/'>
				<span>back</span>
			</Link>
			<input value={name} onChange={(e) => handleChange(e)} type='text' />
			<ul>
				{data.data?.characters.results.map((character: any, key: number) => (
					<>
						<p style={{ fontWeight: 'bold' }}>{character.name}</p>
						<li key={key}>{character.location.name}</li>
						<img src={character.image} alt='' />
					</>
				))}
			</ul>
			{console.log(data)}
		</div>
	);
};

export default Search;
