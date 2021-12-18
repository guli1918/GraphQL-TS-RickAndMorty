import React from 'react';
import { useCharacter } from '../../hooks/useCharacter';
import { useParams } from 'react-router-dom';

const Character: React.FC = () => {
	const params = useParams();
	const { data, loading, error } = useCharacter(Number(params.id));
	return (
		<div className='Character'>
			{!loading ? (
				<>
					<h1>{data.character.name}</h1>
					<img src={data.character.image} alt={data.character.name} />
					<div>
						{data.character.episode.map((episode: any, key: number) => (
							<div key={key}>
								<h3>{episode.name}</h3>
								<p>{episode.episode}</p>
							</div>
						))}
					</div>
				</>
			) : (
				<span>Loading...</span>
			)}
			{error && <span>Error occured: {error}</span>}
		</div>
	);
};

export default Character;
