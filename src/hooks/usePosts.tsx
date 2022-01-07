import { useState } from 'react'; 
 
export const usePosts = () => { 
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);  

	return { 
		page,
		totalPages, 
		setPage,
		setTotalPages, 
	}
}
