import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
	query {
		characters {
			results {
				name
				image
				id
				gender
			}
		}
	}
`;

export const useCharacters = () => {
	const { error, data, loading } = useQuery(GET_CHARACTERS);

	return { error, data, loading };
};
