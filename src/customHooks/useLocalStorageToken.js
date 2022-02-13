function useLocalStorageToken() {
	const token = localStorage.getItem('tokenId');
	return token ? token : '';
}

export default useLocalStorageToken;
