import React from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { useNavigate } from 'react-router-dom';
import './characterList.css';

interface ICharacter {
	name: string;
	image: string;
	id: string;
	gender: string;
}

const CharacterList: React.FC = () => {
	const { error, loading, data } = useCharacters();
	const navigate = useNavigate();
	return (
		<div className='CharacterList'>
			{!loading ? (
				<div className='Characters'>
					{data.characters.results.map((character: ICharacter, key: number) => (
						<div onClick={() => navigate(character.id)} key={key} className='Character'>
							<h3>{character.id}</h3>
							<h1>{character.name}</h1>
							<p>{character.gender}</p>
							<img src={character.image} alt={character.name} />
						</div>
					))}
					{error && <span>Error occured: {error}</span>}
				</div>
			) : (
				<span>Loading...</span>
			)}
		</div>
	);
};

export default CharacterList;
