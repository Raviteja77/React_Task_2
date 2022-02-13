import { mockedAuthorsList } from '../constants';

function useAuthorsIdToGetName(authorsId) {
	const arrayOfAuthors = [];
	authorsId.forEach((authorId) =>
		mockedAuthorsList.forEach((authorsList) => {
			if (authorsList.id === authorId) {
				arrayOfAuthors.push(authorsList.name);
				arrayOfAuthors.push(', ');
			}
		})
	);
	arrayOfAuthors.pop();
	return arrayOfAuthors;
}

export default useAuthorsIdToGetName;
