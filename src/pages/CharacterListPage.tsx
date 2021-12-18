import React from 'react';
import { Link } from 'react-router-dom';
import CharacterList from '../components/CharacterLists/CharacterList';

const CharacterListPage: React.FC = () => {
	return (
		<div>
			<Link to='/search'>
				<h3 style={{ textAlign: 'right', color: 'blueviolet', cursor: 'pointer' }}>
					SEARCH
				</h3>
			</Link>
			<CharacterList />
		</div>
	);
};

export default CharacterListPage;
