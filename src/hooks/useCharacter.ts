import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER = gql`
	query getCharacter($id: ID!) {
		character(id: $id) {
			name
			image
			id
			episode {
				name
				episode
			}
		}
	}
`;

export const useCharacter = (id: number) => {
	const { error, data, loading } = useQuery(GET_CHARACTER, {
		variables: { id },
	});

	return { error, data, loading };
};
